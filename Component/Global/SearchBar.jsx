import { Dimensions, Pressable, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

export const SearchBar = ({onChange, navigation}) => {
  const width = Dimensions.get("window").width
  const theme = useTheme()
  return (
    <View style={{
      flexDirection:"row",
      gap:2,
      alignItems:"center",
      height:60,
      marginHorizontal:10,
    }}>
      <View style={{
        flex:1,
        paddingHorizontal:5,
        backgroundColor:"rgba(0,0,0,0)",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10}}>
        <TextInput cursorColor={"rgb(255,255,255)"} placeholder={"Type to search..."} style={{
          color:"white",
          fontSize:25,
          fontFamily:"roboto",
        }} onChangeText={onChange} autoFocus={true}/>
      </View>
        <Pressable onPress={()=>{
          navigation.goBack()
        }} style={{
          backgroundColor:"white",
          height:43,
          justifyContent:"center",
          width:43,
          borderRadius:100000,
          elevation:10,
          alignItems:"center",
        }}>
          <Entypo name={"cross"} size={width * 0.045} color={"black"}/>
        </Pressable>
    </View>
  );
};
