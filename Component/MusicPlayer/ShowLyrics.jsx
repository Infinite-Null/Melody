import { Button, Dimensions, Modal, ScrollView, Text, View } from "react-native";
import { Heading } from "../Global/Heading";
import { Spacer } from "../Global/Spacer";
import { LoadingComponent } from "../Global/Loading";
import React from "react";
import { useTheme } from "@react-navigation/native";

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
        <Heading text={"Lyrics"}/>
        <Text selectable={true} style={{
          color:theme.colors.text,
          fontSize:width * 0.045,
          fontWeight:300,
          paddingRight:10,
        }}>{Lyric?.lyrics?.replaceAll("<br>","\n")}</Text>
        <Spacer height={300}/>
      </ScrollView>}
        {Loading && <LoadingComponent loading={true} height={height}/>}
        <Button title={"Close"} onPress={()=>{
          setShowDailog(false)
        }}/>
      </View>
    </Modal>
  );
};
