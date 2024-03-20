import { Dimensions, Pressable,View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { AddPlaylist, getIndexQuality, PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import { useActiveTrack, usePlaybackState } from "react-native-track-player";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import FormatArtist from "../../Utils/FormatArtists";
import { EachSongMenuButton } from "../MusicPlayer/EachSongMenuButton";


export const EachSongCard = memo(function EachSongCard({title,artist,image,id,url,duration,language,artistID,isLibraryLiked, width, titleandartistwidth, isFromPlaylist, Data, index}) {
  const width1 = Dimensions.get("window").width;
  const {updateTrack, setVisible} = useContext(Context)
  const currentPlaying = useActiveTrack()
  const playerState = usePlaybackState()


  async function AddSongToPlayer (){
    if (isFromPlaylist){
      const ForMusicPlayer = []
      const quality = await getIndexQuality()
      Data?.data?.songs?.map((e,i)=>{
        if (i >= index){
          ForMusicPlayer.push({
            url:e?.downloadUrl[quality].url,
            title:FormatTitleAndArtist(e?.name),
            artist:FormatTitleAndArtist(FormatArtist(e?.artists?.primary)),
            artwork:e?.image[2]?.url,
            image:e?.image[2]?.url,
            duration:e?.duration,
            id:e?.id,
            language:e?.language,
            downloadUrl:e?.downloadUrl,
          })
        }
      })
      await AddPlaylist(ForMusicPlayer)
    } else if (isLibraryLiked){
      const Final = []
      Data?.map((e,i)=>{
        if (i >= index) {
          Final.push({
            url:e.url,
            title:e?.title,
            artist:e?.artist,
            artwork:e?.artwork,
            duration:e?.duration,
            id:e?.id,
            language:e?.language,
            artistID:e?.primary_artists_id,
            downloadUrl:e?.downloadUrl,
          })
        }
      })
      await AddPlaylist(Final)
    } else {
      const quality = await getIndexQuality()
      const song  = {
        url: url[quality].url,
        title:FormatTitleAndArtist(title),
        artist:FormatTitleAndArtist(artist),
        artwork:image,
        duration,
        id,
        language,
        artistID:artistID,
        image:image,
        downloadUrl:url,
      }
      PlayOneSong(song)
    }
    updateTrack()
  }
  return (
    <>
      <View style={{
        flexDirection:'row',
        width:width ? width : width1,
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
          <FastImage source={((id === currentPlaying?.id ?? "") && playerState.state === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState.state !== "playing" ) ? require("../../Images/songPaused.gif") : {
            uri:image,
          }} style={{
            height:50,
            width:50,
            borderRadius:10,
          }}/>
          <View style={{
            flex:1,
          }}>
            <PlainText text={FormatTitleAndArtist(title)} style={{width:titleandartistwidth ? titleandartistwidth : width1 * 0.67}}/>
            <SmallText text={FormatTitleAndArtist(artist)} style={{width:titleandartistwidth ? titleandartistwidth : width1 * 0.67}}/>
          </View>
        </Pressable>
        <EachSongMenuButton Onpress={()=>{
          setVisible({
            visible:true,
            title,artist,image,id,url,duration,language,
          })
        }}/>
      </View>
    </>
  );
})
