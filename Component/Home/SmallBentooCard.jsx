import { Image, Pressable, Text, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

export const SmallBentooCard = ({width , image , text, navigate}) => {
  const navigation = useNavigation()
  const theme = useTheme()
  return (
    <Pressable onPress={()=>{
      navigation.navigate("ShowPlaylistofType",{Searchtext:navigate.toLowerCase()})
    }} style={{
      height:170,
      borderRadius:10,
      elevation:10,
      overflow:"hidden",
    }}>
      <Image source={image} style={{
        width:width,
        height:170,
      }}/>
      <View style={{
        position:"absolute",
        bottom:0,
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(9,9,9,0.67)",
      }}>
        <Text style={{
          textAlign:"center",
          fontSize:20,
          fontWeight:"bold",
          color:"rgb(225,225,225)",
        }}>{text}</Text>
        <Text style={{
          textAlign:"center",
          fontSize:10,
          color:"white",
        }}>Listen Now</Text>
      </View>
    </Pressable>
  );
};
