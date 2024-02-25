import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const SmallText = ({text, color}) => {
  const theme = useTheme()
  return (
    <Text style={{
      color:(!color)? theme.colors.textSecondary : color,
      fontSize:theme.colors.fontSize-5,
    }}>{text}</Text>
  );
};
