import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { Pressable } from "react-native";

export const GetLyricsButton = ({ onPress }) => {
  const theme = useTheme()
  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={"lyrics"} size={25} color={theme.colors.text}/>
    </Pressable>
  );
};
