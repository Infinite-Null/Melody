import { Dimensions,Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import { Spacer } from "../Global/Spacer";
import FastImage from "react-native-fast-image";


export const LibraryRouteHeading = ({text}) => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
  return (
    <>
      <Spacer/>
      <View style={{
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        gap: 10,
      }}>
        <View  style={{
          borderRadius:1000,
          elevation:10,
          height:40,
          width:40,
          padding:2,
        }}>
          <FastImage source={require("../../Images/Logo.png")} style={{
            flex:1,
            borderRadius:1000,
          }}/>
        </View>
        <Text style={{
          fontWeight:500,
          color:theme.colors.text,
          fontSize:width * 0.06,
        }}>{text}</Text>
      <View/>
      </View>
      <Spacer/>
    </>
  );
};
