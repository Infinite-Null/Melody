import { Dimensions, TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "@react-navigation/native";
import Animated, { FadeOutUp, FlipInXDown } from "react-native-reanimated";

export const SearchBar = ({onChange}) => {
  const width = Dimensions.get("window").width
  const theme = useTheme()
  return (
    <View style={{
      flexDirection:"row",
      gap:2,
      alignItems:"center",
      height:50,
      marginHorizontal:10,

    }}>
      <Animated.View entering={FlipInXDown.delay(80).duration(200)} style={{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:"rgb(29,33,47)",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10}}>
        <TextInput style={{
          color:"white",
        }} onChangeText={onChange} autoFocus={true}/>
      </Animated.View>
        <Animated.View entering={FlipInXDown.duration(200)} exiting={FadeOutUp.duration(200)} style={{
          backgroundColor:theme.colors.primary,
          height:50,
          justifyContent:"center",
          width:50,
          borderTopRightRadius:10,
          borderBottomRightRadius:10,
          elevation:10,
          alignItems:"center",
        }}>
          <Feather name={"search"} size={width * 0.065} color={"black"}/>
        </Animated.View>
    </View>
  );
};
