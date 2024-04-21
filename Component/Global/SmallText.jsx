import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GetFontSizeValue } from "../../LocalStorage/AppSettings";

export const SmallText = ({text, color, style, maxLine, selectable}) => {
  const theme = useTheme()
  const [Size, setSize] = useState(10);
  async function getFont(){
    const data = await GetFontSizeValue()
    if (data === "Medium"){
      setSize(10)
    } else if (data === "Small"){
      setSize(10)
    } else {
      setSize(11)
    }
  }

  useEffect(() => {
    getFont()
  }, []);
  return (
    <Text selectable={selectable} numberOfLines={maxLine ? maxLine : 2} style={{
      color:(!color) ? theme.colors.textSecondary : color,
      fontSize:Size,
      fontFamily:'roboto',
      ...style,
    }}>{text}</Text>
  );
};
