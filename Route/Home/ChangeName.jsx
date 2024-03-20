import { MainWrapper } from "../../Layout/MainWrapper";
import { Dimensions, Pressable, TextInput, ToastAndroid, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { Heading } from "../../Component/Global/Heading";
import { useState } from "react";
import { SetUserNameValue } from "../../LocalStorage/StoreUserName";
import { useTheme } from "@react-navigation/native";
import { PlainText } from "../../Component/Global/PlainText";
import { Spacer } from "../../Component/Global/Spacer";

export const ChangeName = ({navigation}) => {
  const width = Dimensions.get("window").width
  const theme  = useTheme()
  const [Name, setName] = useState("");
  async function OnConfirm(name){
    if (name === ""){
      // eslint-disable-next-line no-alert
      alert("Please Enter name!")
    } else {
      await SetUserNameValue(name.trim())
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
        <Spacer/>
        <Pressable onPress={()=>{
          OnConfirm(Name)
        }} style={{
          padding:10,
          alignItems:"center",
          justifyContent:'center',
          backgroundColor:theme.colors.primary,
          borderRadius:10,
        }}>
          <PlainText text={"Change Name"} style={{
            color:"black",
          }}/>
        </Pressable>
      </View>
    </MainWrapper>
  );
};
