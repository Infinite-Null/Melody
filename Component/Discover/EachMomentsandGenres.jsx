import { Pressable, View } from "react-native";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";

export const EachMomentsandGenres = ({text, color}) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{
      // navigation.navigate("LanguageDetail",{language:language.toLowerCase()})
    }} style={{
      backgroundColor:"rgb(42,41,41)",
      maxWidth:100,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"flex-start",
      flexDirection:'row',
    }}>
      <View style={{
        borderRadius:10,
        width:10,
        height:50,
        backgroundColor:color,
        marginRight:10,
      }}/>
      <PlainText text={text}/>
    </Pressable>
  );
};
