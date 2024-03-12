import { Dimensions,  Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Spacer } from "../Global/Spacer";


export const LibraryRouteHeading = ({text}) => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
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
      <View/>
      </SpaceBetween>
      <Spacer/>
      <Spacer/>
    </>
  );
};