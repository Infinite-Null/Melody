import { Dimensions, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { Heading } from "../Global/Heading";
import { Spacer } from "../Global/Spacer";
import { LoadingComponent } from "../Global/Loading";
import React from "react";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import Clipboard from '@react-native-clipboard/clipboard';

export const ShowLyrics = ({ShowDailog, Loading, Lyric, setShowDailog}) => {
  const height  = Dimensions.get("window").height
  const width = Dimensions.get("window").width
  const theme = useTheme()
  return (
    <Modal visible={ShowDailog} style={{
      backgroundColor:"black",
    }} statusBarTranslucent={true} presentationStyle={"pageSheet"}>
      <View style={{
        backgroundColor:"black",
        paddingHorizontal:20,
        paddingVertical:50,
      }}>{!Loading && <ScrollView contentContainerStyle={{
        minHeight:height,
      }}>
        <Heading text={"Lyrics"} style={{
          textAlign:"center",
          fontSize:width * 0.1,
          color:theme.colors.primary,
        }}/>
        <Text selectable={true} style={{
          color:theme.colors.text,
          fontSize:width * 0.055,
          fontWeight:300,
          paddingRight:10,
          textAlign:"center",
        }}>{Lyric?.lyrics?.replaceAll("<br>","\n")}</Text>
        <Spacer height={300}/>
      </ScrollView>}
        {Loading && <LoadingComponent loading={true} height={height}/>}
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(0,0,0,0.07)','rgba(0,0,0,0.7)','rgb(0,0,0)', 'rgb(7,7,7)' ]} style={{flexDirection:"row", gap:4, position:"absolute", alignItems:"center", justifyContent:"center",height:120, paddingTop:70 , bottom:0, width:width + 20 }}>
         <Pressable onPress={()=>{
           setShowDailog(false)
         }}  style={{
           flex:1,
           backgroundColor:"rgb(220,160,160)",
           alignItems:"center",
           justifyContent:"center",
           padding:10,
           borderTopLeftRadius:10,
           borderBottomLeftRadius:10,
         }}>
           <Text style={{
             color:"black",
             fontWeight:"900",
           }}>Close</Text>
         </Pressable>
         <Pressable onPress={()=>Clipboard.setString('mail@mail.com')} style={{
           flex:1,
           backgroundColor:theme.colors.primary,
           alignItems:"center",
           justifyContent:"center",
           padding:10,
           borderBottomRightRadius:10,
           borderTopRightRadius:10,
         }}>
           <Text style={{
             color:"black",
             fontWeight:"900",
           }}>Copy</Text>
         </Pressable>
        </LinearGradient>
      </View>
    </Modal>
  );
};
