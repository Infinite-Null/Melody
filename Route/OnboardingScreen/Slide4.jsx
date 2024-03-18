import { MainWrapper } from "../../Layout/MainWrapper";
import { View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";
import { BottomNextAndPrevious } from "../../Component/RouteOnboarding/BottomNextAndPrevious";

export const Slide4 = ({navigation}) => {
  return (
    <>
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
      }}>
        <Animated.View entering={FadeInDown.duration(500)}><FastImage source={require("../../Images/letsgo.gif")} style={{
          height:200,
          width:200,
          borderRadius:100,
        }}/></Animated.View>
       <Heading text={"You are all set!"} nospace={true} style={{marginTop:10}}/>
        <PlainText text={"Feel the melody"}/>
      </View>
      <BottomNextAndPrevious nextText={"Lets Go"} delay={100} showPrevious={true} onPreviousPress={()=>{
        navigation.replace("Slide3")
      }} onNextPress={()=>{
        navigation.replace("MainRoute")
      }}/>
    </>
  );
};
