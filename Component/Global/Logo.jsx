import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

export const Logo = ({text}) => {
  const theme = useTheme()
  return (
    <View style={{
      flexDirection:"row",
      alignItems:"center",
    }}>
      <Feather name="music" color={theme.colors.primary} size={40}/>
      <Text style={{
        fontWeight:"bold",
        color:theme.colors.text,
        fontSize:theme.colors.headingSize+10,
      }}>{text}</Text>
    </View>
  );
};
