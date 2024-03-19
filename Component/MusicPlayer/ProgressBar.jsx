import Slider from "@react-native-community/slider";
import React from "react";
import { Dimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useProgress } from "react-native-track-player";
import { SetProgressSong } from "../../MusicPlayerFunctions";
import { SmallText } from "../Global/SmallText";
import { value } from "lodash/seq";

export const ProgressBar = () => {
  const width = Dimensions.get("window").width
  const theme = useTheme()
  const { position, duration } = useProgress()
  function formatTime(val) {
    const time =  parseFloat(val)
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    if (seconds < 10){
      return minutes.toString() + ":" + "0" + seconds.toFixed(0).toString()
    }
    return minutes.toString() + ":" + seconds.toFixed(0).toString()
  }
  return (
    <>
      <Slider
        step={1}
        // onValueChange={(progress)=>{
        //   console.log(value);
        //   SetProgressSong(progress)
        // }}
        onSlidingComplete={(progress)=>{
          SetProgressSong(progress)
        }}
        style={{width: width, height: 40}}
        minimumValue={0}
        maximumValue={duration}
        value={(position >= duration) ? 0 : position}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor="rgba(44,44,44,1)"
        thumbTintColor={theme.colors.primary}
      />
      <View style={{flexDirection:"row", justifyContent:"space-between", width:"90%"}}>
        <SmallText text={(position >= duration) ? "0:00" : formatTime(position)}/>
        <SmallText text={formatTime(duration)}/>
      </View>
    </>
  );
};
