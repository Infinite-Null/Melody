import { Heading } from "../../Component/Global/Heading";
import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Pressable, ScrollView, ToastAndroid, View } from "react-native";
import { PlainText } from "../../Component/Global/PlainText";
import { Dropdown } from "react-native-element-dropdown";
import {
  GetDownloadPath,
  GetFontSizeValue,
  GetPlaybackQuality,
  SetDownloadPath, SetFontSizeValue,
  SetPlaybackQuality,
} from "../../LocalStorage/AppSettings";
import { useEffect, useState } from "react";
import { SmallText } from "../../Component/Global/SmallText";

export const SettingsPage = ({navigation}) => {
  const [Font, setFont] = useState("");
  const [Playback, setPlayback] = useState("");
  const [Download, setDownload] = useState("");
  const FontSize = [
    { value: 'Small' },
    { value: 'Medium' },
    { value: 'Large' },
  ];
  const PlaybackQuality = [
    { value: '12kbps' },
    { value: '48kbps' },
    { value: '96kbps' },
    { value: '160kbps' },
    { value: '320kbps' },
  ];
  const DownloadPath = [
    { value: 'Music' },
    { value: 'Downloads' },
  ]
  async function GetFontSize(){
    const data = await GetFontSizeValue()
    setFont(data)
  }
  async function GetPlayBack(){
    const data = await GetPlaybackQuality()
    setPlayback(data)
  }
  async function GetDownLoad(){
    const data = await GetDownloadPath()
    setDownload(data)
  }

  async function SetDownLoad({ value }){
    await SetDownloadPath(value)
    ToastAndroid.showWithGravity(
      `Download path changed to ${value}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  async function SetPlayBack({ value }){
    await SetPlaybackQuality(value)
    ToastAndroid.showWithGravity(
      `Playback quality changed to ${value}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  async function SetFont({ value }){
    await SetFontSizeValue(value)
    ToastAndroid.showWithGravity(
      `Font size changed to ${value}`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }
  useEffect(() => {
    GetFontSize()
    GetPlayBack()
    GetDownLoad()
  }, []);
  return (
    <MainWrapper>
       <PaddingConatiner>
         <Heading text={"SETTINGS"}/>
         <ScrollView>
           <EachSettingsButton text={"Change Name"} OnPress={()=>{
             navigation.navigate("ChangeName")
           }}/>
           <EachSettingsButton text={"Select Languages"} OnPress={()=>{
             navigation.navigate("SelectLanguages")
           }}/>
           <EachDropDownWithLabel data={FontSize} text={"Font size"} placeholder={Font} OnChange={SetFont}/>
           <EachDropDownWithLabel data={PlaybackQuality} text={"Playback quality"} placeholder={Playback} OnChange={SetPlayBack}/>
           <EachDropDownWithLabel data={DownloadPath} text={"Download Path"} placeholder={Download} OnChange={SetDownLoad}/>
           <SmallText text={"*Note: If you change font size, change name or select languages please restart the app to see the effect"}/>
         </ScrollView>
       </PaddingConatiner>
    </MainWrapper>
  );
};

function EachSettingsButton({text, OnPress}) {
  return <Pressable onPress={OnPress} style={{
    backgroundColor:"rgb(34,39,34)",
    padding:20,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:10,
  }}>
    <PlainText text={text}/>
    <PlainText text={"→"}/>
  </Pressable>
}
function EachDropDownWithLabel({data, text, placeholder, OnChange}){
  return <View style={{
    backgroundColor:"rgb(34,39,34)",
    padding:20,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
  }}>
    <PlainText text={text}/>
    <Dropdown placeholder={placeholder} placeholderStyle={{
      color:"white",
    }} itemTextStyle={{
      color:"rgb(26,26,26)",
    }} containerStyle={{
      backgroundColor:"rgb(236,236,236)",
      borderRadius:5,
      borderWidth:0,
    }} style={{
      width:120,
    }} data={data} labelField="value" valueField="value" onChange={OnChange}/>
  </View>
}
