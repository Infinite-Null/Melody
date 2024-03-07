import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "react-native";
import { PlayNextSong } from "../../MusicPlayerFunctions";

export const NextSongButton = ({size}) => {
  const theme = useTheme()
  return <Pressable style={{
    padding:10,
  }} onPress={()=>{
         PlayNextSong()
      }}><FontAwesome6 name={"forward-step"} size={size ? size :15} color={theme.colors.text}/></Pressable>
};
