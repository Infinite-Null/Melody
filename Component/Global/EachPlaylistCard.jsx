import { View } from "react-native";
import { PlainText } from "./PlainText";
import { SmallText } from "./SmallText";
import { SpaceBetween } from "../../Layout/SpaceBetween";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FastImage from "react-native-fast-image";
import { memo } from "react";
import { useTheme } from "@react-navigation/native";

export const EachPlaylistCard = memo(function EachPlaylistCard ({image, name, follower, id}){
  const theme = useTheme()
  return (
    <View style={{
      borderRadius:10,
      overflow:"hidden",
      width:220,
      height:290,
      backgroundColor:"rgb(55,55,79)",
      padding:10,
      elevation:3,
      marginRight:10,
    }}>
      <FastImage source={{
        uri:image,
      }} style={{
        height:200,
        width:"100%",
        borderRadius:10,
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
    </View>
  );
})
