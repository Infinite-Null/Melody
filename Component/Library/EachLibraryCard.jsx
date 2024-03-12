import { Dimensions, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Heading } from "../Global/Heading";
import { PlainText } from "../Global/PlainText";

export const EachLibraryCard = () => {
  const width = Dimensions.get("window").width
  const containerWidth = width * 0.45
  return (
    <View style={{
      marginVertical:8,
      height:containerWidth,
      width:containerWidth,
      borderRadius:7,
      overflow:"hidden",
    }}>
      <ImageBackground blurRadius={10} source={require("../../Images/Liked.png")} style={{
        height:containerWidth,
        width:containerWidth,
      }}>
        <View style={{
          alignItems:"center",
          justifyContent:"space-between",
          flex:1,
          backgroundColor:"rgba(0,0,0,0.53)",
        }}>
          <FastImage source={require("../../Images/Liked.png")} style={{
            height:"80%",
            width:"100%",
          }}/>
          <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
          }}>
            <PlainText text={"Liked Songs"}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
