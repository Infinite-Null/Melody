import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { SmallText } from "../Global/SmallText";
import { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { useGetUserName } from "../../hooks/useGetUserName";
import { PlainText } from "../Global/PlainText";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import { Dimensions, Pressable, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Heading } from "../Global/Heading";

export const TopHeader = memo(({showHeader}) => {
  const navigation = useNavigation()
  const {width} = Dimensions.get("window")
  const theme = useTheme()
  return (
    <>
      {showHeader && <Animated.View entering={FadeInUp} exiting={FadeOutUp} style={{height:50,width:"100%", backgroundColor:"rgba(0,0,0,0)", position:"absolute", zIndex:100}}>
        <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={["rgba(19,19,19,0.87)", "rgba(19,19,19,0.98)"]} style={{
         flex:1,
         height:50,
          justifyContent:"flex-end",
        }}>
        <PaddingConatiner>
          <SpaceBetween>
            <View style={{flex:1}}>
              <Heading text={`Melody`} />
            </View>
            <Pressable style={{
              padding:5,
              backgroundColor:"rgba(0,0,0,0)",
              borderRadius:10,
            }} onPress={()=>{
              navigation.navigate("Search")
            }}><Feather name={"search"} size={width * 0.055} color={theme.colors.text}/></Pressable>
            <Pressable onPress={()=>{
              navigation.navigate("Settings")
            }} style={{
              padding:5,
              backgroundColor:"rgba(0,0,0,0)",
              borderRadius:10,
            }}>
              <SimpleLineIcons name={"settings"} size={width * 0.055} color={theme.colors.text}/>
            </Pressable>
          </SpaceBetween>
        </PaddingConatiner>
        </LinearGradient>
      </Animated.View>}
    </>
  );
});
