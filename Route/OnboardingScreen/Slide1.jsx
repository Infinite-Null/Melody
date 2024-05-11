import { MainWrapper } from "../../Layout/MainWrapper";
import FastImage from "react-native-fast-image";
import { View } from "react-native";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";
import Animated, { FadeInDown} from "react-native-reanimated";
import { BottomNextAndPrevious } from "../../Component/RouteOnboarding/BottomNextAndPrevious";

export const Slide1 = ({navigation}) => {
  return (
    <MainWrapper>
     <View style={{
       alignItems:"center",
       justifyContent:"center",
       flex:1,
     }}>
       <Animated.View entering={FadeInDown.duration(500)}><FastImage source={require("../../Images/Logo.jpg")} style={{
         height:200,
         width:200,
         borderRadius:100,
       }}/></Animated.View>
       <Animated.View  entering={FadeInDown.delay(500)}><Heading text={"Welcome to Melody"} nospace={true} style={{marginTop:10}}/></Animated.View>
       <Animated.View entering={FadeInDown.delay(750)}><PlainText text={"listen to music for free"}/></Animated.View>
     </View>
      <BottomNextAndPrevious delay={100} onNextPress={()=>{
        navigation.replace("Slide2")
      }}/>
    </MainWrapper>
  );
};
