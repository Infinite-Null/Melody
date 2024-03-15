import { MainWrapper } from "../../Layout/MainWrapper";
import { ScrollView, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";
import { BottomNextAndPrevious } from "../../Component/RouteOnboarding/BottomNextAndPrevious";
import { EachCheckBox } from "../../Component/RouteOnboarding/EachCheckBox";
import { useState } from "react";
import { GetLanguageValue, SetLanguageValue } from "../../LocalStorage/Languages";

export const Slide2 = ({navigation}) => {
  const [Languages, setLanguages] = useState([]);
  async function onNextPress(language){
    if (language.length < 2){
      // eslint-disable-next-line no-alert
      alert("Please select atleast 2 language")
    } else {
      const Lang =  language.join(",")
      await SetLanguageValue(Lang)
      navigation.replace("Slide3")
    }
  }
  return (
    <MainWrapper>
      <View style={{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
      }}>
        <Animated.View entering={FadeInDown.duration(500)}><FastImage source={require("../../Images/selectLanguage.gif")} style={{
          height:200,
          width:200,
          borderRadius:100,
        }}/></Animated.View>
        <Animated.View  entering={FadeInDown.delay(500)}><Heading text={"What's Your Music Taste?"} nospace={true} style={{marginTop:10}}/></Animated.View>
        <Animated.View entering={FadeInDown.delay(750)}><PlainText text={"select atleast 2 language"}/></Animated.View>
      </View>
     <View style={{
       flex:1,
       alignItems:"center",
       justifyContent:'flex-start',
     }}>
      <EachCheckBox data={Languages} onCheck1={(data)=>{
        setLanguages(()=>data)
      }} checkbox1={"English"} checkbox2={"Hindi"} onCheck2={(data)=>{
        setLanguages(()=>data)
      }}/>
       <EachCheckBox data={Languages} onCheck1={(data)=>{
            setLanguages(data)
       }} checkbox1={"Punjabi"} checkbox2={"Tamil"} onCheck2={(data)=>{
            setLanguages(data)
       }}/>
       <EachCheckBox data={Languages} onCheck1={(data)=>{
                setLanguages(data)
       }} checkbox1={"Telugu"} checkbox2={"Bhojpuri"} onCheck2={(data)=>{
                setLanguages(data)
       }}/>
       <EachCheckBox data={Languages} onCheck1={(data)=>{
                setLanguages(data)
       }} checkbox1={"Bengali"} checkbox2={"Marathi"} onCheck2={(data)=>{
                setLanguages(data)
       }}/>
       <EachCheckBox data={Languages} onCheck1={(data)=>{
                setLanguages(data)
       }} checkbox1={"Haryanvi"} checkbox2={"Rajasthani"} onCheck2={(data)=>{
                setLanguages(data)
       }}/>
     </View>
      <BottomNextAndPrevious delay={100} showPrevious={true} onNextPress={()=>{
        onNextPress(Languages)
      }} onPreviousPress={()=>{
        navigation.replace("Slide1")
      }}/>
    </MainWrapper>
  );
};
