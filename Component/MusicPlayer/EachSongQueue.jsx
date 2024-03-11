import { Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import { memo, useContext } from "react";
import Context from "../../Context/Context";

export const EachSongQueue = memo(function EachSongQueue({ title, artist, index, image, id }) {
  const {currentPlaying, playerState} = useContext(Context)
  return (
    <Pressable onPress={()=>{
    }} style={{
      flexDirection:'row',
      gap:10,
      alignItems:"center",
      maxHeight:60,
      elevation:10,
      marginVertical:5,
      marginBottom:6,
      width: "100%",
    }}>
      <FastImage source={((id === currentPlaying?.id ?? "") && playerState === "playing") ? require("../../Images/playing.gif") : ((id === currentPlaying?.id ?? "") && playerState !== "playing" ) ? require("../../Images/songPaused.gif") : {
        uri:image,
      }} style={{
        height:50,
        width:50,
        borderRadius:10,
      }}/>
      <View>
        <PlainText text={title?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{paddingRight:15}}/>
        <SmallText text={artist?.toString()?.replaceAll("&quot;","\"")?.replaceAll("&amp;","and")?.replaceAll("&#039;","'")?.replaceAll("&trade;","™")} style={{paddingRight:15}}/>
      </View>
    </Pressable>
  );
})
