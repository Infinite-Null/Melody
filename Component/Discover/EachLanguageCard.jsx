import { Pressable } from "react-native";
import { PlainText } from "../Global/PlainText";
import { useNavigation } from "@react-navigation/native";

export const EachLanguageCard = ({language}) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{
      navigation.navigate("LanguageDetail",{language:language.toLowerCase()})
    }} style={{
      backgroundColor:"rgb(42,41,41)",
      padding:15,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
    }}>
      <PlainText text={language} style={{paddingRight:0}}/>
    </Pressable>
  );
};
