import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { memo } from "react";
import { StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const MainWrapper = memo(function MainWrapper({children}) {
  const theme = useTheme()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.background}}>
      <LinearGradient angle={30}  start={{x:1,y:0}} end={{x:0,y:1}} colors={["#0f2426", "rgba(16,20,28,0.73)", "rgb(9,9,9)", "rgb(9,9,9)"]}>
        <StatusBar backgroundColor={theme.colors.background} animated={true}/>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
})
