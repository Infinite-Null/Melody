import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { useTheme } from "@react-navigation/native";

export const GetLyricsButton = () => {
  const theme = useTheme()
  return (
    <>
      <MaterialIcons name={"lyrics"} size={25} color={theme.colors.text}/>
    </>
  );
};
