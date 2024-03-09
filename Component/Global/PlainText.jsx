import { Dimensions, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const PlainText = ({text,style}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width;
  return (
    <Text numberOfLines={2}  style={{
      color:theme.colors.text,
      fontSize:width * 0.04,
      fontWeight:500,
      paddingRight:10,
      ...style,
    }}>{text}</Text>
  );
};
