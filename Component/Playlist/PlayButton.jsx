import { ActivityIndicator, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";

export const PlayButton = ({onPress, Loading}) => {
  const theme = useTheme()
  return (
    <Pressable onPress={onPress} style={{
      backgroundColor: theme.colors.primary,
      borderRadius:1000000,
      padding:15,
    }}>
      {!Loading && <Entypo name={"controller-play"} color={theme.colors.background} size={25} />}
      {Loading && <ActivityIndicator color={"black"}/>}
    </Pressable>
  );
};
