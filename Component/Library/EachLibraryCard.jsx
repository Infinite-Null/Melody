import { Dimensions, ImageBackground, Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";

export const EachLibraryCard = ({image, text, navigate}) => {
  const width = Dimensions.get("window").width
  const containerWidth = width * 0.45
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{
        navigation.navigate(navigate)
    }} style={{
      marginVertical:8,
      height:containerWidth,
      width:containerWidth,
      borderRadius:7,
      overflow:"hidden",
    }}>
      <ImageBackground blurRadius={10} source={image} style={{
        height:containerWidth,
        width:containerWidth,
      }}>
        <View style={{
          alignItems:"center",
          justifyContent:"space-between",
          flex:1,
          backgroundColor:"rgba(0,0,0,0.53)",
        }}>
          <FastImage source={image} style={{
            height:"80%",
            width:"100%",
          }}/>
          <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            paddingHorizontal:15,
          }}>
            <PlainText text={text}/>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};
