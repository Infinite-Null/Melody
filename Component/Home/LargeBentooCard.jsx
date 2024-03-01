import { View } from "react-native";
import { Heading } from "../Global/Heading";
import { PlainText } from "../Global/PlainText";
import { useTheme } from "@react-navigation/native";
import { BentooButton } from "./BentooButton";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import FastImage from "react-native-fast-image";

export const LargeBentooCard = ({width,text,subtext,onPress,image,id}) => {
  const theme = useTheme()
  return (
   <PaddingConatiner>
     <View style={{
       width:width,
       height:180,
       borderRadius:10,
       flexDirection:"row",
     }}>
       <FastImage source={require("../../Images/background.jpg")} style={{
         width:"100%",
         position:'absolute',
         height:"100%",
         borderRadius:10,
       }}/>
         <View style={{
           padding:theme.colors.spacing,
           maxWidth:230,
         }}>
           <Heading text={text}/>
           <PlainText text={subtext}/>
           <BentooButton text={"Listen Now"} onPress={onPress}/>
         </View>
         <FastImage source={image} style={{
           height:"100%",
           width:"50%",
           objectFit:"cover",
           position:'absolute',
           right:0,
         }}/>
     </View>
   </PaddingConatiner>
  );
};
