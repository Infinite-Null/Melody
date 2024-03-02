import { Dimensions, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";

export const EachSongCard = ({title,artist,image,width,id,url,style, artistWidth,titleWidth}) => {
  const width1 = Dimensions.get("window").width;
  return (
    <View style={{
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
        <PlainText text={title.replaceAll("&quot;","\"").replaceAll("&amp;","and").replaceAll("&#039;","'").replaceAll("&trade;","™")} style={{paddingRight:15,width:titleWidth ? titleWidth : width1 - 60}}/>
        <SmallText text={artist} style={{paddingRight:15, width:artistWidth ? artistWidth : width1 - 60}}/>
      </View>
    </View>
  );
};
