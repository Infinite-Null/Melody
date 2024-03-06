import { Dimensions, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { Heading } from "../Global/Heading";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeInDown } from "react-native-reanimated";
import Slider from "@react-native-community/slider";
import { PlayPauseButton } from "./PlayPauseButton";
import { Spacer } from "../Global/Spacer";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import { ShuffleButton } from "./ShuffleButton";
import { RepeatSongButton } from "./RepeatSongButton";
import { LikeSongButton } from "./LikeSongButton";
import { SaveMusicButton } from "./SaveMusicButton";

export const FullScreenMusic = ({color}) => {
  const width = Dimensions.get("window").width
  const theme = useTheme()
  return (
   <Animated.View entering={FadeInDown} style={{backgroundColor:"rgba(0,0,0,0)",flex:1}}>
     <ImageBackground blurRadius={10} source={{uri:"https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"}} style={{
       flex:1,
     }}>
       <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.44)"}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)', 'rgba(0,0,0,0.88)', color]} style={{flex:1,alignItems:"center",}}>
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
               uri: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png',
             }}
             style={{
               height: width * 0.9,
               width: width * 0.9,
               borderRadius: 10,
             }}
           />
           <Heading text={"Shape of you"}/>
           <SmallText text={"Shape of you"}/>
           <Slider
             style={{width: width, height: 40}}
             minimumValue={0}
             maximumValue={1}
             minimumTrackTintColor={theme.colors.text}
             maximumTrackTintColor="rgba(44,44,44,1)"
           />
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
