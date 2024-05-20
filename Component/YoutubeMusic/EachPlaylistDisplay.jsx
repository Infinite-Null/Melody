import { Dimensions, Pressable, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { SmallText } from "../Global/SmallText";
import { PlainText } from "../Global/PlainText";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Animated, { FadeOutLeft} from "react-native-reanimated";

export const EachPlaylistDisplay = ({title, thumbnail,totalSongs, removePlaylist, index}) => {
  const  {width} = Dimensions.get('window')
  return (
  <Animated.View exiting={FadeOutLeft}>
    <Pressable style={{
      width:"100%",
      borderRadius:10,
      overflow:"hidden",
      backgroundColor:"rgb(39,42,38)",
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      elevation:10,
      marginBottom:10,
    }}>
      <FastImage
        source={{uri:thumbnail}}
        style={{
          width:width * 0.3,
          height:width * 0.3,
          borderRadius:10,
          marginRight:10,
          elevation:10,
        }}
      >
        <View style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"rgba(0,0,0,0.4)",
        }}>
          <Ionicons name={"play"} size={30} color={"white"} />
        </View>
      </FastImage>
      <View style={{
        padding:10,
        justifyContent:"center",
      }}>
        <PlainText text={title} style={{
          fontSize:width * 0.08,
          color:"white",
        }}/>
        <SmallText text={`${totalSongs} songs`} style={{
          fontSize:width * 0.03,
          color:"white",
        }}/>
      </View>
      <View style={{
        flex:1,
      }}/>
      <TouchableOpacity onPress={()=>{
        removePlaylist(index)
      }} style={{
        padding: 10,
        backgroundColor:"rgb(255,255,255)",
        borderRadius:100000,
        elevation:10,
      }}>
        <Feather name={"trash-2"} size={30} color={"rgb(190,99,99)"} />
      </TouchableOpacity>
    </Pressable>
  </Animated.View>
  );
};
