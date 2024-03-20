
import { Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

export const EachSongMenuButton = ({Onpress}) => {
  const theme = useTheme()
  return (
    <Pressable onPress={()=>{
      Onpress()
    }} style={{
      padding:10,
      backgroundColor:"rgb(28,28,28)",
      borderRadius:100,
    }}>
      <Entypo name={"dots-three-vertical"} size={17} color={theme.colors.text}/>
    </Pressable>
  );
};
