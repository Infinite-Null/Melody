import Modal from "react-native-modal";
import { TextInput, TouchableOpacity, View } from "react-native";
import { PlainText } from "../Global/PlainText";
import { useTheme } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { FadeInDown, ZoomIn } from "react-native-reanimated";
import { useState } from "react";

export const YutubeMusicAddModal = ({Show, setShow, addPlaylist}) => {
  const theme = useTheme()
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  return (
    <Modal onBackButtonPress={()=>setShow(false)} onSwipeComplete={()=>setShow(false)} onBackdropPress={()=>setShow(false)} swipeDirection={['up', 'left']} isVisible={Show} style={{
      justifyContent: 'flex-end',
      margin: 0,
    }}>
      <View style={{
        backgroundColor:"rgb(18,17,17)",
        paddingHorizontal:15,
        paddingVertical:25,
      }}>
        <Animated.View entering={ZoomIn.delay(350)} style={{
          position: 'absolute',
          top: 10,
          right: 10,
          zIndex:100,
        }}>
        <TouchableOpacity onPress={()=>setShow(false)} style={{
          backgroundColor:"white",
          padding:10,
          borderRadius:200000,
          zIndex:100,
          elevation:10,
        }}>
          <Ionicons name={'close'} size={30} color={'black'}/>
        </TouchableOpacity></Animated.View>
        <Animated.View entering={FadeInDown.delay(150)}>
          <TextInput placeholderTextColor={"rgba(0,0,0,0.7)"} placeholder={"Title of playlist"} value={Title} onChangeText={(e)=>setTitle(e)} style={{
            backgroundColor: 'white',
            padding: 20,
            margin: 10,
            borderRadius:20,
            color: 'black',
          }}/>
        </Animated.View>
       <Animated.View entering={FadeInDown.delay(250)}>
         <TextInput placeholderTextColor={"rgba(0,0,0,0.7)"} placeholder={"Url of playlist"} value={Url} onChangeText={(e)=>setUrl(e)} style={{
           backgroundColor: 'white',
           padding: 20,
           margin: 10,
           borderRadius:20,
           color: 'black',
         }}/>
       </Animated.View>
        <Animated.View entering={FadeInDown.delay(350)}>
        <TouchableOpacity onPress={()=>{
          if (Title === "" || Url === ""){
            alert("Please provide title and url of playlist")
          } else {
            setTitle("")
            setUrl("")
            addPlaylist(Title, Url)
            setShow(false)
          }
        }} style={{
          backgroundColor: theme.colors.primary,
          padding: 20,
          margin: 10,
          borderRadius:20,
          alignItems: 'center',
        }}>
          <PlainText text={"Add"}/>
        </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};
