import { MainWrapper } from "../../Layout/MainWrapper";
import { Pressable, ToastAndroid, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { PlainText } from "../../Component/Global/PlainText";
import { EachCheckBox } from "../../Component/RouteOnboarding/EachCheckBox";
import { useState } from "react";
import { SetLanguageValue } from "../../LocalStorage/Languages";
import { useTheme } from "@react-navigation/native";
import { Spacer } from "../../Component/Global/Spacer";

export const SelectLanguages = ({navigation}) => {
  const [Languages, setLanguages] = useState([]);
  const theme = useTheme()
  async function onConfirmPress(language){
    if (language.length < 2){
      // eslint-disable-next-line no-alert
      alert("Please select atleast 2 language")
    } else {
      const Lang =  language.join(",")
      await SetLanguageValue(Lang)
      navigation.pop()
      ToastAndroid.showWithGravity(
        `Please restart the app`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }
  return (
    <MainWrapper>
      <View style={{
        alignItems:"center",
        marginTop:10
      }}>
        <Animated.View entering={FadeInDown.duration(500)}><FastImage source={require("../../Images/selectLanguage.gif")} style={{
          height:150,
          width:150,
          borderRadius:100,
        }}/></Animated.View>
        <Spacer/>
        <Animated.View entering={FadeInDown.delay(750)}><PlainText text={"select atleast 2 language"}/></Animated.View>
      </View>
      <View style={{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        marginTop:10,
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
        }} checkbox1={"Telugu"} checkbox2={"Marathi"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <EachCheckBox data={Languages} onCheck1={(data)=>{
          setLanguages(data)
        }} checkbox1={"Bhojpuri"} checkbox2={"Bengali"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <EachCheckBox data={Languages} onCheck1={(data)=>{
          setLanguages(data)
        }} checkbox1={"Kannada"} checkbox2={"Gujarati"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <EachCheckBox data={Languages} onCheck1={(data)=>{
          setLanguages(data)
        }} checkbox1={"Malayalam"} checkbox2={"Urdu"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <EachCheckBox data={Languages} onCheck1={(data)=>{
          setLanguages(data)
        }} checkbox1={"Kannada"} checkbox2={"Rajasthani"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <EachCheckBox data={Languages} onCheck1={(data)=>{
          setLanguages(data)
        }} checkbox1={"Odia"} checkbox2={"Assamese"} onCheck2={(data)=>{
          setLanguages(data)
        }}/>
        <Spacer/>
        <Pressable onPress={()=>{
          onConfirmPress((Languages))
        }} style={{
          padding:15,
          alignItems:"center",
          justifyContent:'center',
          backgroundColor:theme.colors.primary,
          borderRadius:10,
        }}>
          <PlainText text={"Confirm"} style={{
            color:"black",
            paddingRight:0,
          }}/>
        </Pressable>
      </View>
    </MainWrapper>
  );
};
