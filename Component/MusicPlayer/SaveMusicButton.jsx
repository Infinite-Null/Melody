import { useTheme } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const SaveMusicButton = ({size}) => {
  const theme = useTheme()
  return (
    <>
      <MaterialIcons name={"save"} size={size ? size : 15} color={theme.colors.text}/>
    </>
  );
};
