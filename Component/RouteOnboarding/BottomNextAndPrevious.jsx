import { Pressable, View } from "react-native";
import { PlainText } from "../Global/PlainText";
import { useTheme } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";

export const BottomNextAndPrevious = ({showPrevious, delay, onNextPress, onPreviousPress, nextText}) => {
  const theme = useTheme()
  return (
    <View style={{
      flexDirection:"row",
      gap:5,
    }}>
      {showPrevious &&  <Animated.View entering={FadeInDown.delay(delay)} style={{
        flex:1,
        backgroundColor: theme.colors.primary,
        borderRadius:10,
      }}>
        <Pressable onPress={onPreviousPress} style={{
          width:"100%",
          padding:10,
          alignItems:"center",
          justifyContent:'center',
        }}>
          <PlainText text={"← Prev"} style={{
            color:"black",
          }}/>
        </Pressable>
      </Animated.View>}
      <Animated.View entering={FadeInDown.delay(delay + 100)} style={{
        flex:1,
        backgroundColor: theme.colors.primary,
        borderRadius:10,
      }}>
        <Pressable style={{
          width:"100%",
          padding:10,
          alignItems:"center",
          justifyContent:'center',
        }} onPress={onNextPress}>
          <PlainText text={`${nextText ? nextText : "Next"} →`} style={{
            color:"black",
          }}/>
        </Pressable>
      </Animated.View>
    </View>
  );
};
