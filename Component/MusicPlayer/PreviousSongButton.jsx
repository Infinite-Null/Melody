import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";

export const PreviousSongButton = ({size}) => {
  const theme = useTheme()
  return (
    <>
      <FontAwesome6 name={"backward-step"} size={size ? size : 15} color={theme.colors.text}/>
    </>
  );
};
