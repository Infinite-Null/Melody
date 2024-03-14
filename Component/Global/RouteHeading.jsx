import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import Feather from "react-native-vector-icons/Feather";
import { Spacer } from "./Spacer";
import FastImage from "react-native-fast-image";

export const RouteHeading = ({text}) => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
  const navigation = useNavigation()
  return (
    <>
      <Spacer/>
      <Spacer/>
      <SpaceBetween style={{
        paddingHorizontal:20,
      }}>
        <View style={{
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
        <Pressable onPress={()=>{
          navigation.navigate("Search")
        }}><Feather name={"search"} size={width * 0.065} color={theme.colors.text}/></Pressable>
      </SpaceBetween>
      <Spacer/>
      <Spacer/>
    </>
  );
};
