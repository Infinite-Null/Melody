import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { ActivityIndicator, Pressable } from "react-native";
import {  PauseSong, PlaySong } from "../../MusicPlayerFunctions";
import { usePlaybackState } from "react-native-track-player";

export const PlayPauseButton = ({isFullScreen}) => {
  const theme = useTheme()
  const playerState = usePlaybackState();
  return (
    <>
      {!isFullScreen &&  <>
        {playerState.state !== "playing" && playerState.state !== "buffering" && <Pressable style={{
          padding:5,
        }}  onPress={()=>{
          PlaySong()
        }}><FontAwesome6 name={"play"} size={20} color={theme.colors.text}/></Pressable>}
        {playerState.state === "playing" && <Pressable style={{
          padding:5,
        }} onPress={()=>{
          PauseSong()
        }}><FontAwesome6 name={"pause"} size={20} color={theme.colors.text}/></Pressable>}
        {playerState.state === "buffering" && <ActivityIndicator size={"small"} color={"white"}/>}
      </>}
      {isFullScreen && <>
        {playerState.state !== "playing" && playerState.state !== "buffering" && <Pressable onPress={()=>{
          PlaySong()
        }} style={{
          backgroundColor:"white",
          padding:15,
          height:60,
          width:60,
          borderRadius:1000,
          alignItems:"center",
          justifyContent:"center",
        }}>
          <FontAwesome6 name={"play"} size={20} color={"black"}/>
        </Pressable>}
        {playerState.state === "playing" &&  <Pressable onPress={()=>{
          PauseSong()
        }} style={{
          backgroundColor:"white",
          padding:15,
          height:60,
          width:60,
          borderRadius:1000,
          alignItems:"center",
          justifyContent:"center",
        }}><FontAwesome6 name={"pause"} size={20} color={"black"}/></Pressable>}
        {playerState.state === "buffering" && <ActivityIndicator size={"large"} color={"white"}/>}
      </>}
    </>
  );
};
