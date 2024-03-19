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
    <Pressable onPress={()=>{ navigation.navigate("Playlist" , {id,image,name,follower})}} style={{
      width:180,
      height:240,
      ...MainContainerStyle,
    }}>
      <FastImage source={{
        uri:image,
      }} style={{
        height:180,
        width:"100%",
        borderRadius:10,
        ...ImageStyle,
      }}/>
      <SpaceBetween style={{
        height:55,
      }}>
        <View style={{
          width:"85%",
        }}>
          <PlainText text={name}/>
          <SmallText text={follower}/>
        </View>
        <FontAwesome5 name={"play"} size={15} color={theme.colors.text}/>
      </SpaceBetween>
    </Pressable>
  );
})
