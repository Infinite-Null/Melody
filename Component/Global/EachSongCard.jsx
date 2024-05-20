import { Pressable,View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { AddPlaylist, PauseSong, PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { EachSongMenuButton } from "../MusicPlayer/EachSongMenuButton";
import FormatArtist from "../../Utils/FormatArtists";
import { getYoutubeMusicStreamUrl } from "../../Api/YoutubeMusic/Song";


export const EachSongCard = memo(function EachSongCard({isYoutubeMusic,title,artists,thumbnail,duration, id, url, index, songData, isFromLiked, isYoutubePlaylist}) {
  const {updateTrack, setVisible, setSongLoading} = useContext(Context)
  const formattedAritst = (isYoutubeMusic || isFromLiked) ? artists : FormatArtist(artists)
  async function AddSongToPlayerJioSavan () {
    const ForMusicPlayer = []
    if (isFromLiked){
      songData?.map((e,i)=>{
        console.log(e);
        if (i >= index){
          ForMusicPlayer.push({
            url:url,
            title:FormatTitleAndArtist(e?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:e?.artwork,
            image:e?.artwork,
            duration:e?.duration,
            id:e?.id,
            isYoutubeMusic:isYoutubeMusic ? true : false,
            streamURL:url ,
          })
        }
      })
    } else {
      songData?.songs?.map((e,i)=>{
        if (i >= index){
          ForMusicPlayer.push({
            url:(isFromLiked) ? url : e?.downloadUrl[4].url,
            title:FormatTitleAndArtist(e?.name),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:e?.image[2]?.url,
            image:e?.image[2]?.url,
            duration:e?.duration,
            id:e?.id,
            isYoutubeMusic:false,
            streamURL:(isFromLiked) ? url : e?.downloadUrl[4].url,
          })
        }
      })
    }


    await AddPlaylist(ForMusicPlayer)
    updateTrack()
  }
  // async function getStreamingLink () {
  //   try {
  //     const streamLink = await getYoutubeMusicStreamUrl(id)
  //     console.log(streamLink);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  async function AddSongToPlayerYoutubeMusic () {
    if(isYoutubePlaylist){
      const ForMusicPlayer = []
      songData?.map((e,i)=>{
        if (i >= index){
          ForMusicPlayer.push({
            url:e?.url,
            title:FormatTitleAndArtist(e?.title),
            artist:FormatTitleAndArtist(formattedAritst),
            artwork:e?.image,
            image:e?.image,
            duration:e?.duration,
            id:e?.id,
            isYoutubeMusic:true,
            streamURL:e?.url,
          })
        }
      })
      await AddPlaylist(ForMusicPlayer)
      updateTrack()
    } else {
      try {

        await PauseSong()
        const streamLink = await getYoutubeMusicStreamUrl(id)
        const ForMusicPlayer = {
          url:streamLink.url,
          title:FormatTitleAndArtist(title),
          artist:FormatTitleAndArtist(formattedAritst),
          artwork:thumbnail,
          image:thumbnail,
          duration:duration,
          id:id,
          isYoutubeMusic:true,
          streamURL:streamLink.url,
        }
        await PlayOneSong(ForMusicPlayer)
        updateTrack()
      } catch (e) {
        console.log(e);
      } finally {
        setSongLoading(false)
      }
    }
  }
  async function AddSongToPlayer () {
    if (!isYoutubeMusic){
      await AddSongToPlayerJioSavan()
    } else {
      await AddSongToPlayerYoutubeMusic()
    }
  }

  return (
    <>
      <View style={{
        flexDirection:'row',
        width: "100%",
        marginRight:10,
        alignItems:"center",
        paddingRight:4,
        // backgroundColor:"red"
      }}>
        <Pressable onPress={AddSongToPlayer} style={{
          flexDirection:'row',
          gap:10,
          alignItems:"center",
          maxHeight:60,
          elevation:10,
          marginBottom:6,
          flex:1,
        }}>
          {/*((id === currentPlaying?.id ?? "") && playerState.state === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState.state !== "playing" ) ? require("../../Images/songPaused.gif") :*/}
          <FastImage source={{
            uri:thumbnail ? thumbnail : "https://toptrendpk.com/wp-content/uploads/2020/08/free-music-downloads.jpg",
          }} style={{
            height:50,
            width:50,
            borderRadius:10,
          }}/>
          <View style={{
            flex:1,
          }}>
            <PlainText text={FormatTitleAndArtist(title)} style={{width:"90%"}}/>
            <SmallText text={FormatTitleAndArtist(formattedAritst)} style={{width:"90%"}}/>
          </View>
        </Pressable>
        <EachSongMenuButton Onpress={()=>{
          setVisible({
            visible:true,
            title,
            artist:FormatTitleAndArtist(formattedAritst),image:thumbnail,
            id,
            url,
            duration,
            isYoutubeMusic:isYoutubeMusic ? true : false,
          })
        }}/>
      </View>
    </>
  );
})
