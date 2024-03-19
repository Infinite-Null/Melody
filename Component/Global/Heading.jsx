import { Dimensions, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Spacer } from "./Spacer";

export const Heading = ({text, style, nospace}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
  return (
   <>
     {!nospace && <Spacer/>}
     <Text numberOfLines={2} style={{
       fontWeight:600,
       color:theme.colors.text,
       fontSize:width * 0.055,
       ...style,
     }}>{text}</Text>
     {!nospace && <Spacer/>}
   </>
  );
};
