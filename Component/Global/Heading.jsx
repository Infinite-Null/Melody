import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

export const Heading = ({text}) => {
  const theme = useTheme()
  return (
    <Text style={{
      fontWeight:"bold",
      color:theme.colors.text,
      fontSize:theme.colors.headingSize,
    }}>{text}</Text>
  );
};
