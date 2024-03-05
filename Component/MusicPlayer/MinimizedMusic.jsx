import { Dimensions, Pressable, View } from "react-native";
import React from "react";
import { PlainText } from "../Global/PlainText";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { PlayPauseButton } from "./PlayPauseButton";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import FastImage from "react-native-fast-image";

export const MinimizedMusic = ({setIndex}) => {
  const size = Dimensions.get("window").height
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp.delay(0)}
      style={{
        flexDirection: 'row',
        justifyContent:"space-between",
        height:60,
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
            uri: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png',
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
          <PlainText text={"Happy"}/>
          <SmallText text={"Marsmello"}/>
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
