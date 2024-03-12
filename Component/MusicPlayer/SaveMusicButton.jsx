import { useTheme } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Pressable } from "react-native";

export const SaveMusicButton = ({size}) => {
  const theme = useTheme()
  return (
    <Pressable>
      <MaterialIcons name={"save"} size={size ? size : 15} color={theme.colors.text}/>
    </Pressable>
  );
};
