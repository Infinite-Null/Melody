import { Dimensions, Pressable, View } from "react-native";
import React, { useContext } from "react";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { PlayPauseButton } from "./PlayPauseButton";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import FastImage from "react-native-fast-image";
import Context from "../../Context/Context";
import { useActiveTrack } from "react-native-track-player";

export const MinimizedMusic = ({setIndex}) => {
  const size = Dimensions.get("window").height
  const currentPlaying = useActiveTrack()
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp.delay(0)}
      style={{
        flexDirection: 'row',
        justifyContent:"space-between",
        height:65,
        paddingHorizontal:15,
        paddingTop:5,
        alignItems:"center",
        gap:10,
      }}>
      <Pressable onPress={()=>{
        setIndex(1)
      }} style={{
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
      </Pressable>
     <View style={{gap:20,flexDirection:"row", alignItems:"center"}}>
       <PreviousSongButton/>
       <PlayPauseButton isplaying={false}/>
       <NextSongButton/>
     </View>
    </Animated.View>
  );
};
