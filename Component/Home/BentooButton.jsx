import { Pressable } from "react-native";
import { SmallText } from "../Global/SmallText";
import { useTheme } from "@react-navigation/native";

export const BentooButton = ({text,onPress}) => {
  const theme = useTheme()
  return (
    <Pressable onPress={onPress} style={{
      backgroundColor:theme.colors.primary,
      padding:10,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:10,
      marginTop:10,
      elevation:10,
    }}>
      <SmallText text={text} color={"black"} style={{
        fontWeight:"bold",
      }}/>
    </Pressable>
  );
};
