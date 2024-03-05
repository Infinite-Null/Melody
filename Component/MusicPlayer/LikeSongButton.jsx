import { useTheme } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export const LikeSongButton = ({size, liked}) => {
  const theme = useTheme()
  return (
    <>
      <AntDesign name={liked ? "heart" : "hearto"} size={size ? size : 15} color={liked ? 'rgb(234,113,113)' : theme.colors.text}/>
    </>
  );
};
