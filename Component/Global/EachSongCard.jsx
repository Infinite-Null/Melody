import { View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import FastImage from "react-native-fast-image";

export const EachSongCard = ({title,artist,image,width,id}) => {
  return (
    <View style={{
      flexDirection:'row',
      gap:10,
      alignItems:"center",
      maxHeight:60,
      elevation:10,
      marginVertical:5,
      width:width ? width : "100%",
    }}>
      <FastImage source={{
        uri:image,
      }} style={{
        height:50,
        width:50,
        borderRadius:10,
      }}/>
      <View>
        <PlainText text={title}/>
        <SmallText text={artist}/>
      </View>
    </View>
  );
};
