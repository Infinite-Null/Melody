import { useTheme } from "@react-navigation/native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export const ShuffleButton = ({size}) => {
  const theme = useTheme()
  return (
    <>
      <FontAwesome6 name={"shuffle"} size={size ? size : 15} color={theme.colors.text}/>
    </>
  );
};
