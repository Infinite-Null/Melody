import { SafeAreaView } from "react-native-safe-area-context";

export const MainWrapper = ({children}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"rgb(22,22,24)"}}>
      {children}
    </SafeAreaView>
  );
};
