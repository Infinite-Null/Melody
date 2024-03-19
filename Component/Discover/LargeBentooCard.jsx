import { Pressable, View } from "react-native";
import { Heading } from "../Global/Heading";
import { PlainText } from "../Global/PlainText";
import { useNavigation, useTheme } from "@react-navigation/native";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import FastImage from "react-native-fast-image";
import { SmallText } from "../Global/SmallText";
import { Spacer } from "../Global/Spacer";
import LinearGradient from "react-native-linear-gradient";

export const LargeBentooCard = ({width,text,subtext,image,id}) => {
  const theme = useTheme()
  const navigation = useNavigation()
  return (
   <PaddingConatiner>
     <Pressable onPress={()=>{
       navigation.navigate("Playlist",{id,image:"https://c.saavncdn.com/editorial/charts_TrendingToday_134351_20230826113717.jpg",name:text,follower:subtext})
     }} style={{
       width:width,
       height:180,
       borderRadius:10,
       flexDirection:"row",
     }}>
       <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(120,120,120,0)', 'rgba(0,0,0,0.56)', 'rgb(0,0,0)']} style={{
        flex:1,
       }}>
       <FastImage source={image} style={{
         width:"100%",
         position:'absolute',
         height:"100%",
         borderRadius:10,
         zIndex:-1,
       }}/>
         <View style={{
           padding:theme.colors.spacing,
           maxWidth:230,
         }}>
           <Heading text={text}/>
           <PlainText text={subtext}/>
           <Spacer/>
           <Spacer/>
           <SmallText text={"Listen Now →"} color={"black"} style={{
             fontWeight:"bold",
             color:'white',
           }}/>
         </View>
       </LinearGradient>
     </Pressable>
   </PaddingConatiner>
  );
};
