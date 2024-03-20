import { Dimensions, Pressable, Text, View } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { Spacer } from "../Global/Spacer";
import FastImage from "react-native-fast-image";
import { SmallText } from "../Global/SmallText";
import { GetUserNameValue } from "../../LocalStorage/StoreUserName";
import { useEffect, useState } from "react";

export const DiscoverRouteHeading = () => {
  const [userName, setUserName] = useState("");

  const theme = useTheme()
  const width = Dimensions.get("window").width
  const navigation = useNavigation()
  async function getUserName(){
    const name = await GetUserNameValue()
    setUserName(FormatName(name))
  }
  function FormatName(name){
    if (name.length >= 10){
      return name.slice(0,11) + "..."
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
          }}>{"Discover Music"}</Text>
        </View>
        <View style={{flex:1}}/>
        <Pressable style={{
          padding:5,
          backgroundColor:"rgba(0,0,0,0)",
          borderRadius:10,
        }} onPress={()=>{
          navigation.navigate("Search")
        }}><Feather name={"search"} size={width * 0.055} color={theme.colors.text}/></Pressable>
      </View>
      <Spacer/>
    </>
  );
};
