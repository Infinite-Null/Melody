import { useTheme } from "@react-navigation/native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export const RepeatSongButton = ({size}) => {
  const theme = useTheme()
  return (
    <>
      <FontAwesome6 name={"repeat"} size={size ? size : 15} color={theme.colors.text}/>
    </>
  );
};
