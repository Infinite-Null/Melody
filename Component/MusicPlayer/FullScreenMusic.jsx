import { Dimensions, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import React, { useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { Heading } from "../Global/Heading";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeInDown } from "react-native-reanimated";
import { PlayPauseButton } from "./PlayPauseButton";
import { Spacer } from "../Global/Spacer";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import { ShuffleButton } from "./ShuffleButton";
import { RepeatSongButton } from "./RepeatSongButton";
import { LikeSongButton } from "./LikeSongButton";
import { SaveMusicButton } from "./SaveMusicButton";
import Context from "../../Context/Context";
import { ProgressBar } from "./ProgressBar";

export const FullScreenMusic = ({color}) => {
  const width = Dimensions.get("window").width
  const theme = useTheme()
  const {currentPlaying} = useContext(Context)
  return (
   <Animated.View entering={FadeInDown} style={{backgroundColor:"rgba(0,0,0,0)",flex:1}}>
     <ImageBackground blurRadius={10} source={{uri: currentPlaying?.artwork ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}} style={{
       flex:1,
     }}>
       <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.44)"}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgba(0,0,0,0.88)', color]} style={{flex:1,alignItems:"center"}}>
           <View style={{
             flexDirection:"row",
             alignItems:"flex-end",
             justifyContent:"flex-end",
             width:"100%",
             gap:10,
             padding:15,
           }}>
             <MaterialIcons name={"lyrics"} size={25} color={theme.colors.text}/>
           </View>
           <FastImage
             source={{
               uri: currentPlaying?.artwork ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png",
             }}
             style={{
               height: width * 0.9,
               width: width * 0.9,
               borderRadius: 10,
             }}
           />
           <Heading text={currentPlaying?.title ?? "No music :("} style={{textAlign:"center", paddingHorizontal:10}}/>
           <SmallText text={currentPlaying?.artist ?? "Explore now!"}/>
           <ProgressBar/>
           <Spacer/>
           <Spacer/>
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around", width:"100%"}}>
             <View style={{
               gap:25,
             }}>
               <ShuffleButton size={20}/>
               <LikeSongButton size={20} liked={true}/>
             </View>
             <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center", gap:20}}>
               <PreviousSongButton size={30}/>
               <PlayPauseButton isFullScreen={true} />
               <NextSongButton size={30}/>
             </View>
             <View style={{
               gap:25,
             }}>
             <RepeatSongButton size={20}/>
               <SaveMusicButton size={25}/>
             </View>
           </View>
         </LinearGradient>
       </View>
     </ImageBackground>
   </Animated.View>
  );
};