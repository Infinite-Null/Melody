import { Dimensions, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Heading } from "../Global/Heading";
import { SmallText } from "../Global/SmallText";
import Animated, { FadeInDown } from "react-native-reanimated";
import { PlayPauseButton } from "./PlayPauseButton";
import { Spacer } from "../Global/Spacer";
import { NextSongButton } from "./NextSongButton";
import { PreviousSongButton } from "./PreviousSongButton";
import { RepeatSongButton } from "./RepeatSongButton";
import { LikeSongButton } from "./LikeSongButton";
import { ProgressBar } from "./ProgressBar";
import { GetLyricsButton } from "./GetLyricsButton";
import QueueBottomSheet from "./QueueBottomSheet";
import { getLyricsSongData } from "../../Api/Songs";
import { ShowLyrics } from "./ShowLyrics";
import { useActiveTrack } from "react-native-track-player";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { PlayNextSong, PlayPreviousSong } from "../../MusicPlayerFunctions";

export const FullScreenMusic = ({color, Index, setIndex}) => {
  const pan = Gesture.Pan();
  pan.onFinalize((e)=>{
    if (e.translationX > 100){
      PlayPreviousSong()
    } else if(e.translationX < -100){
      PlayNextSong()
    } else {
      setIndex(0)
    }
  })
  const width = Dimensions.get("window").width
  const currentPlaying = useActiveTrack()
  const [ShowDailog, setShowDailog] = useState(false);
  const [Lyric, setLyric] = useState({});
  const [Loading, setLoading] = useState(false);

  async function GetLyrics() {
    setShowDailog(true)
   try {
      setLoading(true)
     const Lyrics = await getLyricsSongData(currentPlaying.id)
     if (Lyrics.success){
       setLyric(Lyrics.data)
     } else {
       setLyric({
        lyrics:"No Lyrics Found \nOpps... O_o",
       })
     }
   } catch (e) {
     console.log(e);
     setLyric({
       lyrics:"No Lyrics Found \nOpps... O_o",
     })
   } finally {
     setLoading(false)
   }
  }
  return (
   <Animated.View entering={FadeInDown.delay(200)} style={{backgroundColor:"rgb(0,0,0)",flex:1}}>
     <ShowLyrics Loading={Loading} Lyric={Lyric} setShowDailog={setShowDailog} ShowDailog={ShowDailog}/>
     <ImageBackground blurRadius={20} source={{uri: currentPlaying?.artwork ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}} style={{
       flex:1,
     }}>
       <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.44)"}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(4,4,4,0.23)','rgba(9,9,9,0.47)', 'rgba(0,0,0,0.65)', 'rgba(0,0,0,0.89)', 'rgba(0,0,0,0.9)', "rgba(0,0,0,1)"]} style={{flex:1,alignItems:"center"}}>
          <View style={{
            width:"90%",
            marginTop:5,
            height:60,
            alignItems:"center",
            justifyContent:"flex-end",
            flexDirection:"row",
          }}>
            <GetLyricsButton onPress={GetLyrics} />
          </View>
           <Spacer height={20}/>
           <GestureDetector gesture={pan}>
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
           </GestureDetector>
           <Spacer/>
           <Heading text={currentPlaying?.title ?? "No music :("} style={{textAlign:"center", paddingHorizontal:2}} nospace={true}/>
           <SmallText text={currentPlaying?.artist ?? "Explore now!"} style={{textAlign:"center", paddingHorizontal:2}}/>
           <Spacer/>
           <ProgressBar/>
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around", width:"100%"}}>
             <View >
               <LikeSongButton size={20} />
             </View>
             <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center", gap:20}}>
               <PreviousSongButton size={30}/>
               <PlayPauseButton isFullScreen={true} />
               <NextSongButton size={30}/>
             </View>
             <View >
               <RepeatSongButton size={25}/>
             </View>
           </View>
         </LinearGradient>
       </View>
     </ImageBackground>
     <QueueBottomSheet Index={1}/>
   </Animated.View>
  );
};
