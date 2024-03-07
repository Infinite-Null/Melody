import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "react-native";
import { PlayPreviousSong } from "../../MusicPlayerFunctions";

export const PreviousSongButton = ({size}) => {
  const theme = useTheme()
  return (
    <Pressable style={{
      padding:10,
    }} onPress={()=>{
      PlayPreviousSong()
    }}>
      <FontAwesome6 name={"backward-step"} size={size ? size : 15} color={theme.colors.text}/>
    </Pressable>
  );
};
