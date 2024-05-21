import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";
import { useEffect, useState } from "react";
import { YutubeMusicAddModal } from "../../Component/YoutubeMusic/YutubeMusicAddModal";
import { getYoutubeMusicPlaylistSongs } from "../../Api/YoutubeMusic/Playlist";
import { getYoutubeMusicStreamUrl } from "../../Api/YoutubeMusic/Song";
import { GetYoutubeMusicValue, SetYoutubeMusicValue } from "../../LocalStorage/YoutubeMusicPlaylist";
import { EachPlaylistDisplay } from "../../Component/YoutubeMusic/EachPlaylistDisplay";
import { Spacer } from "../../Component/Global/Spacer";
import { LoadingModal } from "../../Component/YoutubeMusic/LoadingModal";

export const YoutubeMusic = () => {
  const { height } = Dimensions.get('window')
  const [ShowModal, setShowModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Playlist, setPlaylist] = useState([]);

  async function addPlaylist(Title, Url){
    setLoading(true)
    for (let i = 0; i < Playlist.length; i++){
      if (Playlist[i].title === Title){
        setLoading(false)
        alert("Playlist with same title already exist")
        return
      }
    }
    try {
      const id = Url.split("list=")[1]
      if (id === undefined){
        throw "Invalid Url"
      } else {
        const songs = await getYoutubeMusicPlaylistSongs(id)
        const finalData = []
        for (let i = 0; i < songs.length; i++){
          const streamUrl = await getYoutubeMusicStreamUrl(songs[i]?.youtubeId)
          finalData.push({
            title:songs[i]?.title,
            url:streamUrl.url,
            image:songs[i]?.thumbnailUrl,
            artist:songs[i]?.artists[0]?.name ?? "",
            duration:songs[i]?.duration?.totalSeconds,
            id:songs[i]?.youtubeId,
          })
        }
        const Value = await GetYoutubeMusicValue(finalData)
        const TempValue = {
          title:Title,
          songs:finalData,
          totalSongs:finalData.length,
          thumbnail:finalData[0]?.image,
        }
        Value.push(TempValue)
        await SetYoutubeMusicValue(Value)
        await setPlaylistValue()
        // console.log(finalData);
      }
    } catch (e) {
      console.log(e);
      alert("Invalid Url please make sure playlist is public and url is correct")
    }
    setLoading(false)
  }
  async function setPlaylistValue(){
    const Value = await GetYoutubeMusicValue()
    console.log(Value);
    setPlaylist(Value)
  }
  async function removePlaylist(index){
    const Value = await GetYoutubeMusicValue()
    Value.splice(index, 1)
    await SetYoutubeMusicValue(Value)
    await setPlaylistValue()
  }
  useEffect(() => {
   setPlaylistValue()
  }, []);
  return (
    <View style={{
      paddingHorizontal: 10,
    }}>
      <LoadingModal Show={Loading}/>
      <YutubeMusicAddModal Show={ShowModal} setShow={setShowModal} addPlaylist={addPlaylist}/>
      <Heading text={"Your Playlists"}/>
      <PlainText text={"To add press add button and provide youtube playlist url"} style={{
        width: '70%',
      }}/>
     <Animated.View entering={ZoomIn} exiting={ZoomOut} style={{
       position: 'absolute',
       top: height - 260,
       right: 20,
       zIndex:100,
     }}>
       <TouchableOpacity
         onPress={()=>setShowModal(true)}
         style={{
           borderWidth: 1,
           borderColor: 'rgba(0,0,0,0.2)',
           alignItems: 'center',
           justifyContent: 'center',
           width: 70,
           height: 70,
           backgroundColor: '#fff',
           borderRadius: 100,
         }}
       >
         <Ionicons name={'add'} size={30} color={'black'}/>
       </TouchableOpacity>
     </Animated.View>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom: height * 0.5,
      }}>
        {Playlist.map((item, index) => (
          <EachPlaylistDisplay key={item.title} data={item} title={item.title} thumbnail={item.thumbnail} totalSongs={item.totalSongs} index={index} removePlaylist={removePlaylist}/>
        ))}
      </ScrollView>
    </View>
  );
};
