import { Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import { useNavigation } from "@react-navigation/native";

export const EachSmallCardHome = ({ name, subtitle, image, isPlaylist,id, navigate}) => {
  const navigation = useNavigation()
  const ContainerHeight = 50
  function OnpressCard(){
    if (isPlaylist){
      navigation.navigate("Playlist" , {id,image,name,follower:subtitle})
    } else {
      navigation.navigate(navigate)
    }
  }
  return (
    <Pressable onPress={OnpressCard}  style={{
      height:ContainerHeight,
      flexDirection:"row",
      gap:10,
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"rgb(35,35,35)",
      paddingRight:10,
      borderRadius:6,
      flex:1,
    }}>
      <FastImage source={isPlaylist ? {uri:image} : image} style={{
        height:ContainerHeight,
        width:ContainerHeight,
        borderTopLeftRadius:6,
        borderBottomLeftRadius:6,
        elevation:10,
      }}/>
      <View style={{
        flex:1,
      }}>
        <PlainText text={name} numberOfLine={1}/>
        <SmallText text={subtitle} maxLine={1}/>
      </View>
    </Pressable>
  );
};
