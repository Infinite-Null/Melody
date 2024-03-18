import { MainWrapper } from "../../Layout/MainWrapper";
import { Dimensions, TextInput, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { Heading } from "../../Component/Global/Heading";
import { BottomNextAndPrevious } from "../../Component/RouteOnboarding/BottomNextAndPrevious";
import { useState } from "react";
import { SetUserNameValue } from "../../LocalStorage/StoreUserName";
import { useTheme } from "@react-navigation/native";

export const Slide3 = ({navigation}) => {
  const width = Dimensions.get("window").width
  const theme  = useTheme()
  const [Name, setName] = useState("");
 async function NextPress(name){
   if (name === ""){
     // eslint-disable-next-line no-alert
     alert("Please Enter name!")
   } else {
     await SetUserNameValue(name.trim())
     navigation.replace("MainRoute")
   }
 }
  return (
    <MainWrapper>
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
      }}>
        <Animated.View entering={FadeInDown.duration(500)}><FastImage source={require("../../Images/GiveName.gif")} style={{
          height:200,
          width:200,
          borderRadius:100,
        }}/></Animated.View>
        <Animated.View  entering={FadeInDown.delay(500)}><Heading text={"What should I call you?"} nospace={true} style={{marginTop:10}}/></Animated.View>
          <TextInput placeholderTextColor={theme.colors.text} value={Name} onChangeText={(text)=>{
            setName(text)
          }} textAlign={'center'} placeholder={"Enter your name"} style={{
            borderWidth:2,
            backgroundColor:"rgb(53,58,70)",
            borderRadius:10,
            padding:10,
            width:width * 0.5,
            color:theme.colors.text,
          }}/>
      </View>
      <BottomNextAndPrevious delay={100} nextText={"Let's Go"} showPrevious={true} onPreviousPress={()=>{
        navigation.replace("Slide2")
      }} onNextPress={()=>{
        NextPress(Name)
      }}/>
    </MainWrapper>
  );
};
