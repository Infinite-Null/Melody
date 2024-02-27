import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

export const MainWrapper = ({children}) => {
  const theme = useTheme()
  return (
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.background}}>
      {children}
    </SafeAreaView>
  );
};
