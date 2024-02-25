import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const SmallText = ({text}) => {
  const theme = useTheme()
  return (
    <Text style={{
      color:theme.colors.textSecondary,
      fontSize:theme.colors.fontSize-5,
    }}>{text}</Text>
  );
};
