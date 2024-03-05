import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";

export const NextSongButton = ({size}) => {
  const theme = useTheme()
  return (
    <>
      <FontAwesome6 name={"forward-step"} size={size ? size :15} color={theme.colors.text}/>
    </>
  );
};
