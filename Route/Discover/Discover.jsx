import { MainWrapper } from "../../Layout/MainWrapper";
import { View } from "react-native";
import { PlainText } from "../../Component/Global/PlainText";
import { SmallText } from "../../Component/Global/SmallText";

export const Discover = () => {
  return (
   <MainWrapper>
     <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
       <PlainText text={"Coming Soon"} nospace={true}/>
       <SmallText text={"More features are on the way"}/>
     </View>
   </MainWrapper>
  );
};
