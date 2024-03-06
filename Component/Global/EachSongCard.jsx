import { Dimensions, Pressable, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";
import { PlayOneSong } from "../../MusicPlayerFunctions";

export const EachSongCard = ({title,artist,image,width,id,url,style, artistWidth,titleWidth,duration}) => {
  const width1 = Dimensions.get("window").width;
  return (
    <Pressable onPress={()=>{
       const song  = {
         url:url[3].link,
         title:title.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™"),
         artist,
         artwork:image,
         duration,
         id,
       }
        PlayOneSong(song)
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
      <FastImage source={{
        uri:image,
      }} style={{
        height:50,
        width:50,
        borderRadius:10,
      }}/>
      <View>
        <PlainText text={title.toString().replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™")} style={{paddingRight:15,width:titleWidth ? titleWidth : width1 - 60}}/>
        <SmallText text={artist.toString()} style={{paddingRight:15, width:artistWidth ? artistWidth : width1 - 60}}/>
      </View>
    </Pressable>
  );
};
