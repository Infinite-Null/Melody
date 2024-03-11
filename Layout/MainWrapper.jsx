import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { memo } from "react";

export const MainWrapper = memo(function MainWrapper({children}) {
  const theme = useTheme()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.background}}>
      {children}
    </SafeAreaView>
  );
})
