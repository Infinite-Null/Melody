import { View } from "react-native";
import { PlainText } from "../Global/PlainText";

export const EachLanguageCard = ({language}) => {
  return (
    <View style={{
      backgroundColor:"rgb(42,41,41)",
      maxWidth:100,
      padding:10,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
    }}>
      <PlainText text={language}/>
    </View>
  );
};
