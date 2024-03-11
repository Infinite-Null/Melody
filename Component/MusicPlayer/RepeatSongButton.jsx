import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import Context from "../../Context/Context";
import { Pressable } from "react-native";
import { Repeats } from "../../Utils/Repeats";
import { RepeatMode } from 'react-native-track-player';

import { SetRepeatMode } from "../../MusicPlayerFunctions";

export const RepeatSongButton = ({size}) => {
  const theme = useTheme()
  const {Repeat, setRepeat} = useContext(Context)
  function onRepeatPress(){
    if (Repeat === Repeats.NoRepeat){
      setRepeat(Repeats.RepeatAll)
      SetRepeatMode(RepeatMode.Queue)
    } else if (Repeat === Repeats.RepeatAll){
      setRepeat(Repeats.RepeatOne)
      SetRepeatMode(RepeatMode.Track)
    } else {
      setRepeat(Repeats.NoRepeat)
      SetRepeatMode(RepeatMode.Off)
    }
  }
  return (
    <Pressable onPress={onRepeatPress}>
      <MaterialCommunityIcons name={Repeat} size={size ? size : 15} color={theme.colors.text}/>
    </Pressable>
  );
};
