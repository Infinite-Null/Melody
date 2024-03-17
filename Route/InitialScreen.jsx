import Animated, { FadeIn } from "react-native-reanimated";
import { View } from "react-native";
import { MainWrapper } from "../Layout/MainWrapper";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { GetLanguageValue } from "../LocalStorage/Languages";

export const InitialScreen = ({navigation}) => {
  const theme = useTheme()
  async function InitialCall(){
    const lang = await GetLanguageValue()
    if (lang !== ''){
      navigation.replace("MainRoute")
    } else {
      navigation.replace("Onboarding")
    }
  }
  useEffect(() => {
    setTimeout(() => {InitialCall()}, 720)
  }, []);
  return (
   <MainWrapper>
     <View style={{
       flex:1,
       alignItems:"center",
       justifyContent:"center",
     }}>
       <Animated.Text entering={FadeIn.delay(100).duration(300)} style={{
         fontSize:40,
         color:theme.colors.text,
         fontWeight:500,
       }}>Melody</Animated.Text>
       <Animated.Text entering={FadeIn.delay(300)} style={{
         fontSize:15,
         color:theme.colors.primary,
       }}>Music for free</Animated.Text>
     </View>
   </MainWrapper>
  );
};
