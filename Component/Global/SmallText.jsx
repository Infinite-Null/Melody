import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const SmallText = ({text, color, style, maxLine, selectable}) => {
  const theme = useTheme()
  return (
    <Text selectable={selectable} numberOfLines={maxLine ? maxLine : 2} style={{
      color:(!color) ? theme.colors.textSecondary : color,
      fontSize:10,
      ...style,
    }}>{text}</Text>
  );
};
