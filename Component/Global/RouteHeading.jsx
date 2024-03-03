import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Spacer } from "./Spacer";

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
          backgroundColor:theme.colors.primary,
          borderRadius:1000,
          elevation:10,
          padding:2,
        }}>
          <MaterialCommunityIcons name={"music-note-outline"} size={width * 0.065} color={"black"}/>
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
