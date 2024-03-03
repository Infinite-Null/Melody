import { Dimensions, Pressable, Text } from "react-native";
import Animated, {ZoomIn, ZoomOut} from "react-native-reanimated";
import {memo} from "react";
import { useTheme } from "@react-navigation/native";

function EachTabs({item,isActive,index,setActive}) {
    const theme = useTheme()
    const width = Dimensions.get('window').width
    return <Pressable style={{padding:10 , alignItems:"center"}} onPress={()=>{
        setActive(index)
    }}>
        <Text style={{
            color:isActive ? theme.colors.primary : theme.colors.textSecondary,
            fontSize:width * 0.04,
        }}>{item}</Text>
        {isActive &&  <Animated.View entering={ZoomIn.duration(300)} exiting={ZoomOut.duration(300)} style={{
            width:width * 0.02,
            height:width * 0.02,
            backgroundColor:theme.colors.primary,
            borderRadius:100000000000,
        }}/>}
    </Pressable>
}
export default memo(EachTabs)
