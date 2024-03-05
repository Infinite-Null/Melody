import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "react-native";

export const PlayPauseButton = ({isplaying, isFullScreen}) => {
  const theme = useTheme()
  return (
    <>
      {!isFullScreen &&  <>
        {!isplaying && <FontAwesome6 name={"play"} size={20} color={theme.colors.text}/>}
        {isplaying && <FontAwesome6 name={"pause"} size={20} color={theme.colors.text}/>}
      </>}
      {isFullScreen && <>
        {!isplaying && <Pressable style={{
          backgroundColor:theme.colors.primary,
          padding:15,
          height:60,
          width:60,
          borderRadius:1000,
          alignItems:"center",
          justifyContent:"center",
        }}>
          <FontAwesome6 name={"play"} size={20} color={"black"}/>
        </Pressable>}
        {isplaying && <Pressable style={{
          backgroundColor:theme.colors.primary,
          padding:15,
          height:60,
          width:60,
          borderRadius:1000,
          alignItems:"center",
          justifyContent:"center",
        }}><FontAwesome6 name={"pause"} size={20} color={"black"}/></Pressable>}
      </>}

    </>
  );
};
