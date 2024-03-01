import { Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export const PlayButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Entypo name={"controller-play"} color={"black"} size={17}/>
    </Pressable>
  );
};
