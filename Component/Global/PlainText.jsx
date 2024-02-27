import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const PlainText = ({text}) => {
  const theme = useTheme()
  return (
    <Text style={{
      color:theme.colors.text,
      fontSize:theme.colors.fontSize,
      fontWeight:500,
    }}>{text}</Text>
  );
};
