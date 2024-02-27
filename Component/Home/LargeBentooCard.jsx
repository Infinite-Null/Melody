import { Image, ImageBackground, View } from "react-native";
import { Heading } from "../Global/Heading";
import { PlainText } from "../Global/PlainText";
import { useTheme } from "@react-navigation/native";
import { BentooButton } from "./BentooButton";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";

export const LargeBentooCard = ({width,text,subtext,onPress,image,backgroundColor}) => {
  const theme = useTheme()
  return (
   <PaddingConatiner>
     <View style={{
       width:width,
       backgroundColor:backgroundColor,
       height:180,
       borderRadius:10,
       elevation:10,
       flexDirection:"row",
       overflow:"hidden",
     }}>
       <ImageBackground source={require("../../Images/background.jpg")} style={{
         width:"100%",
       }}>
         <View style={{
           padding:theme.colors.spacing,
           maxWidth:230,
         }}>
           <Heading text={text}/>
           <PlainText text={subtext}/>
           <BentooButton text={"Listen Now"} onPress={onPress}/>
         </View>
         <Image source={image} style={{
           height:"100%",
           width:"50%",
           objectFit:"cover",
           position:'absolute',
           right:0,
         }}/>
       </ImageBackground>
     </View>
   </PaddingConatiner>
  );
};
