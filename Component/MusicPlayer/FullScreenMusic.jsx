import { Dimensions, ImageBackground, View } from "react-native";
import FastImage from "react-native-fast-image";
import React, { useContext, useState } from "react";
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
import { SaveMusicButton } from "./SaveMusicButton";
import Context from "../../Context/Context";
import { ProgressBar } from "./ProgressBar";
import { GetLyricsButton } from "./GetLyricsButton";
import QueueBottomSheet from "./QueueBottomSheet";
import { getLyricsSongData } from "../../Api/Songs";
import { ShowLyrics } from "./ShowLyrics";

export const FullScreenMusic = ({color}) => {
  const width = Dimensions.get("window").width
  const {currentPlaying} = useContext(Context)
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
   <Animated.View entering={FadeInDown} style={{backgroundColor:"rgba(0,0,0,0)",flex:1}}>
     <ShowLyrics Loading={Loading} Lyric={Lyric} setShowDailog={setShowDailog} ShowDailog={ShowDailog}/>
     <ImageBackground blurRadius={10} source={{uri: currentPlaying?.artwork ?? "https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png"}} style={{
       flex:1,
     }}>
       <View style={{flex:1,backgroundColor:"rgba(0,0,0,0.44)"}}>
         <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(44,44,44,0)','rgba(9,9,9,0.84)', 'rgba(0,0,0,0.86)', color]} style={{flex:1,alignItems:"center"}}>
          <View style={{
            width:"90%",
            marginTop:30,
            height:60,
            alignItems:"center",
            justifyContent:"flex-end",
            flexDirection:"row",
          }}>
            <GetLyricsButton onPress={GetLyrics} />
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
           <SmallText text={currentPlaying?.artist ?? "Explore now!"} style={{textAlign:"center"}}/>
           <ProgressBar/>
           <Spacer/>
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
     <QueueBottomSheet/>
   </Animated.View>
  );
};
