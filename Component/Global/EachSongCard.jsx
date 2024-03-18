import { Dimensions, Pressable,View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { AddPlaylist, PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import { useActiveTrack, usePlaybackState } from "react-native-track-player";
import FormatTitleAndArtist from "../../Utils/FormatTitleAndArtist";
import { EachSongDownoadComponent } from "./EachSongDownoadComponent";
import FormatArtist from "../../Utils/FormatArtists";

export const EachSongCard = memo(function EachSongCard({title,artist,image,id,url,duration,language,artistID,isLibraryLiked, width, titleandartistwidth, isFromPlaylist, Data, index}) {
  const width1 = Dimensions.get("window").width;
  const {updateTrack} = useContext(Context)
  const currentPlaying = useActiveTrack()
  const playerState = usePlaybackState()
  async function AddSongToPlayer (){
    if (isFromPlaylist){
      const ForMusicPlayer = []
      Data?.data?.songs?.map((e,i)=>{
        if (i >= index){
          ForMusicPlayer.push({
            url:e?.downloadUrl[4].url,
            title:FormatTitleAndArtist(e?.name),
            artist:FormatTitleAndArtist(FormatArtist(e?.artists?.primary)),
            artwork:e?.image[2]?.url,
            image:e?.image[2]?.url,
            duration:e?.duration,
            id:e?.id,
            language:e?.language,
            artistID:e?.primary_artists_id,
          })
        }
      })
      await AddPlaylist(ForMusicPlayer)
    } else {
      const song  = {
        url:isLibraryLiked ? url : url[4].url,
        title:FormatTitleAndArtist(title),
        artist:FormatTitleAndArtist(artist),
        artwork:image,
        duration,
        id,
        language,
        artistID:artistID,
        image:image,
      }
      PlayOneSong(song)
    }
    updateTrack()
  }
  return (
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
          <PlainText text={title?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{width:titleandartistwidth ? titleandartistwidth : width1 * 0.67}}/>
          <SmallText text={artist?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{width:titleandartistwidth ? titleandartistwidth : width1 * 0.67}}/>
        </View>
      </Pressable>
     <EachSongDownoadComponent url={isLibraryLiked ? url : url[4].url} title={title}/>
    </View>
  );
})
