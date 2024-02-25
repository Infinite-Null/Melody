import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const PlainText = ({text}) => {
  const theme = useTheme()
  return (
    <Text style={{
      color:theme.colors.textSecondary,
      fontSize:theme.colors.fontSize,
      fontWeight:600,
    }}>{text}</Text>
  );
};
