import { Dimensions,  View } from "react-native";
import React, { memo } from "react";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeIn } from "react-native-reanimated";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import { PlayPauseButton } from "./PlayPauseButton";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import FastImage from "react-native-fast-image";
import { useActiveTrack, useProgress } from "react-native-track-player";
import { PlayNextSong, PlayPreviousSong } from "../../MusicPlayerFunctions";

export const MinimizedMusic = memo(({setIndex, color}) => {
  const { position, duration } = useProgress()
  // const fling = Gesture.Fling()
  const pan = Gesture.Pan();
  pan.onFinalize((e)=>{
    if (e.translationX > 100){
      PlayPreviousSong()
    } else if(e.translationX < -100){
      PlayNextSong()
    } else {
      setIndex(1)
    }
  })
  function TotalCompletedInpercent(){
    return (position / duration) * 100
  }
  const size = Dimensions.get("window").height
  const currentPlaying = useActiveTrack()
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Animated.View
        entering={FadeIn}
        style={{
          flexDirection: 'row',
          justifyContent:"space-between",
          height:80,
          paddingHorizontal:15,
          paddingVertical:15,
          alignItems:"center",
          gap:10,
          backgroundColor:color,
        }}>
        <GestureDetector gesture={pan}>
          <View  style={{
            flexDirection:"row",
            flex:1,
          }}>
            <FastImage
              source={{
                uri: currentPlaying?.artwork ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
              }}
              style={{
                height: (size *  0.1) - 30,
                width: (size *  0.1) - 30,
                borderRadius: 10,
              }}
            />
            <View style={{
              flex:1,
              height:(size *  0.1) - 30,
              alignItems:"flex-start",
              justifyContent:"center",
              paddingHorizontal:10,
            }}>
              <PlainText text={currentPlaying?.title ?? "No music :("}/>
              <SmallText text={currentPlaying?.artist ?? "Explore now!"} maxLine={1}/>
            </View>
          </View>
        </GestureDetector>
        <View style={{gap:20,flexDirection:"row", alignItems:"center"}}>
          <PreviousSongButton/>
          <PlayPauseButton isplaying={false}/>
          <NextSongButton/>
        </View>
      </Animated.View>
      <View style={{height:2, width:`${TotalCompletedInpercent()}%`, backgroundColor:"white"}}/>
    </GestureHandlerRootView>
  );
});
