import { Dimensions, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const RouteHeading = ({text}) => {
  const theme = useTheme()
  const width = Dimensions.get("window").width
  return (
    <SpaceBetween style={{
      paddingHorizontal:10,
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
        fontSize:width * 0.065,
      }}>{text}</Text>
      <Feather name={"search"} size={width * 0.065} color={theme.colors.text}/>
    </SpaceBetween>
  );
};
