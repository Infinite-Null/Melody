import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { Spacer } from "../Global/Spacer";
import FastImage from "react-native-fast-image";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { SmallText } from "../Global/SmallText";
import { GetUserNameValue } from "../../LocalStorage/StoreUserName";
import { useEffect, useState } from "react";

export const RouteHeading = () => {
  const [userName, setUserName] = useState("");

  const theme = useTheme()
  const width = Dimensions.get("window").width
  const navigation = useNavigation()
  function GetDisplayText() {
    const now = new Date(),
      hour = now.getHours();

    const morning = (hour >= 4 && hour <= 11),
      afternoon = (hour >= 12 && hour <= 16),
      evening = (hour >= 17 && hour <= 20),
      night = (hour >= 21 || hour <= 3);

    if (morning) {
      return "Good Morning"
    } else if (afternoon){
     return "Good Afternoon"
    } else if (evening) {
      return "Good Evening"
    } else if (night) {
      return "Good Night"
    }
  }
  async function getUserName(){
    const name = await GetUserNameValue()
    setUserName(FormatName(name))
  }
  function FormatName(name){
    if (name.length >= 7){
      return name.slice(0,8) + " ..."
    } else {
      return name
    }
  }

  useEffect(() => {
     getUserName()
  }, []);

  return (
    <>
      <Spacer/>
      <View style={{
        paddingHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        gap: 10,
      }}>
        <View style={{
          borderRadius:1000,
          elevation:10,
          height:40,
          width:40,
          padding:2,
        }}>
          <FastImage source={require("../../Images/Logo.png")} style={{
            flex:1,
            borderRadius:1000,
          }}/>
        </View>
        <View>
           <SmallText text={`Hey, ${userName}`}/>
          <Text style={{
            fontWeight:500,
            color:theme.colors.text,
            fontSize:width * 0.045,
          }}>{GetDisplayText()}</Text>
        </View>
        <View style={{flex:1}}/>
        <Pressable style={{
          padding:5,
          backgroundColor:"rgba(0,0,0,0)",
          borderRadius:10,
        }} onPress={()=>{
          navigation.navigate("Search")
        }}><Feather name={"search"} size={width * 0.055} color={theme.colors.text}/></Pressable>
        <Pressable style={{
          padding:5,
          backgroundColor:"rgba(0,0,0,0)",
          borderRadius:10,
        }}>
          <SimpleLineIcons name={"settings"} size={width * 0.055} color={theme.colors.text}/>
        </Pressable>
      </View>
      <Spacer/>
    </>
  );
};
