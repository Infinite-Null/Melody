import { Pressable } from "react-native";
import { SmallText } from "../Global/SmallText";

export const BentooButton = ({text,onPress}) => {
  return (
    <Pressable onPress={onPress} style={{
      backgroundColor:"black",
      width:100,
      padding:10,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:10,
      marginTop:10,
      elevation:10.
    }}>
      <SmallText text={text}/>
    </Pressable>
  );
};
