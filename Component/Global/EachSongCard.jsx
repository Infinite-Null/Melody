import { Dimensions, Pressable, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { PlayOneSong } from "../../MusicPlayerFunctions";
import { memo, useContext } from "react";
import Context from "../../Context/Context";
import { useActiveTrack, usePlaybackState } from "react-native-track-player";

export const EachSongCard = memo(function EachSongCard({title,artist,image,width,id,url,style,artistWidth,titleWidth,duration,language,artistID,isLibraryLiked}) {
  const width1 = Dimensions.get("window").width;
  const {updateTrack} = useContext(Context)
  const currentPlaying = useActiveTrack()
  const playerState = usePlaybackState()
  return (
    <Pressable onPress={()=>{
      const song  = {
        url:isLibraryLiked ? url : url[4].url,
        title:title?.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
        artist:artist?.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
        artwork:image,
        duration,
        id,
        language,
        artistID:artistID,
        image:image,
      }
      PlayOneSong(song)
      updateTrack()
    }} style={{
      flexDirection:'row',
      gap:10,
      alignItems:"center",
      maxHeight:60,
      elevation:10,
      marginVertical:5,
      marginBottom:6,
      width:width ? width : "100%",
      ...style,
    }}>
      <FastImage source={((id === currentPlaying?.id ?? "") && playerState.state === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState.state !== "playing" ) ? require("../../Images/songPaused.gif") : {
        uri:image,
      }} style={{
        height:50,
        width:50,
        borderRadius:10,
      }}/>
      <View>
        <PlainText text={title?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{paddingRight:15,width:titleWidth ? titleWidth : width1 - 60}}/>
        <SmallText text={artist?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{paddingRight:15, width:artistWidth ? artistWidth : width1 - 60}}/>
      </View>
    </Pressable>
  );
})
