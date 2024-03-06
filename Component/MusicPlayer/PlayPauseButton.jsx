import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useTheme } from "@react-navigation/native";
import { ActivityIndicator, Pressable } from "react-native";
import {  PauseSong, PlaySong } from "../../MusicPlayerFunctions";
import { useTrackPlayerEvents, Event } from "react-native-track-player";
import { useState } from "react";
const events = [
  Event.PlaybackState,
  Event.PlaybackError,
];
export const PlayPauseButton = ({isFullScreen}) => {
  const theme = useTheme()

  const [playerState, setPlayerState] = useState("paused")
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });
  return (
    <>
      {!isFullScreen &&  <>
        {playerState !== "playing" && playerState !== "buffering" && <Pressable style={{
          padding:5,
        }}  onPress={()=>{
          PlaySong()
        }}><FontAwesome6 name={"play"} size={20} color={theme.colors.text}/></Pressable>}
        {playerState === "playing" && <Pressable style={{
          padding:5,
        }} onPress={()=>{
          PauseSong()
        }}><FontAwesome6 name={"pause"} size={20} color={theme.colors.text}/></Pressable>}
        {playerState === "buffering" && <ActivityIndicator size={"small"} color={"white"}/>}
      </>}
      {isFullScreen && <>
        {playerState !== "playing" && playerState !== "buffering" && <Pressable onPress={()=>{
          PlaySong()
        }} style={{
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
        {playerState === "playing" &&  <Pressable onPress={()=>{
          PauseSong()
        }} style={{
          backgroundColor:theme.colors.primary,
          padding:15,
          height:60,
          width:60,
          borderRadius:1000,
          alignItems:"center",
          justifyContent:"center",
        }}><FontAwesome6 name={"pause"} size={20} color={"black"}/></Pressable>}
        {playerState === "buffering" && <ActivityIndicator size={"small"} color={"white"}/>}
      </>}
    </>
  );
};
