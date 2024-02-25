import { Image, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";

export const EachSongCard = ({title,artist,image}) => {
  return (
    <View style={{
      flexDirection:'row',
      gap:10,
      alignItems:"center",
      maxHeight:60,
      elevation:10,
      marginVertical:5,
    }}>
      <Image source={{
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
