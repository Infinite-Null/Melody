import { Pressable } from "react-native";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";

export const EachLanguageCard = ({language}) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{
      navigation.navigate("LanguageDetail",{language:language.toLowerCase()})
    }} style={{
      backgroundColor:"rgba(43,47,44,0.84)",
      padding:15,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
    }}>
      <PlainText text={language} style={{paddingRight:0}}/>
    </Pressable>
  );
};
