import { Pressable, View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FastImage from "react-native-fast-image";
import { memo } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

export const EachPlaylistCard = memo(function EachPlaylistCard ({image, name, follower, id, MainContainerStyle, ImageStyle}){
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(36,41,62,0.64)','rgb(60,110,204)','rgba(29,58,129,0.96)', theme.colors.background]} style={{
      borderRadius:10,
      overflow:"hidden",
      width:220,
      height:290,
      padding:10,
      elevation:3,
      marginRight:10,
      ...MainContainerStyle,
    }}>
    <Pressable onPress={()=>{navigation.navigate("Playlist",{id})}} style={{
      height:"100%",
      width:"100%",
    }}>
      <FastImage source={{
        uri:image,
      }} style={{
        height:200,
        width:"100%",
        borderRadius:10,
        ...ImageStyle,
      }}/>
      <SpaceBetween style={{
        height:70,
      }}>
        <View style={{
          width:"85%",
        }}>
          <PlainText text={name}/>
          <SmallText text={follower}/>
        </View>
        <FontAwesome5 name={"play"} size={15} color={theme.colors.text}/>
      </SpaceBetween>
    </Pressable></LinearGradient>
  );
})
