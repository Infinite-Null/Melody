import { Heading } from "../../Component/Global/Heading";
import { MainWrapper } from "../../Layout/MainWrapper";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { Pressable, ScrollView, View } from "react-native";
import { PlainText } from "../../Component/Global/PlainText";
import { Dropdown } from "react-native-element-dropdown";

export const SettingsPage = () => {
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
  return (
    <MainWrapper>
       <PaddingConatiner>
         <Heading text={"SETTINGS"}/>
         <ScrollView>
           <EachSettingsButton text={"Change Name"}/>
           <EachSettingsButton text={"Select Languages"}/>
           <EachDropDownWithLabel data={FontSize} text={"Change font size"}/>
           <EachDropDownWithLabel data={PlaybackQuality} text={"Playback quality"}/>
           <EachDropDownWithLabel data={DownloadPath} text={"Change Download Path"}/>
         </ScrollView>
       </PaddingConatiner>
    </MainWrapper>
  );
};

function EachSettingsButton({text}) {
  return <Pressable style={{
    backgroundColor:"rgb(43,45,55)",
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
function EachDropDownWithLabel({data, text}){
  return <View style={{
    backgroundColor:"rgb(43,45,55)",
    padding:20,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10,
  }}>
    <PlainText text={text}/>
    <Dropdown containerStyle={{
      backgroundColor:"rgb(43,45,55)",
      borderRadius:10,
      borderWidth:0,
    }} style={{
      width:120,
    }} data={data} labelField="value" valueField="value" onChange={()=>{
    }}/>
  </View>
}
