import { MainWrapper } from "../../Layout/MainWrapper";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { View } from "react-native";
import { Spacer } from "../../Component/Global/Spacer";

export const Discover = () => {
  return (
   <MainWrapper>
     <LargeBentooCard text={"Top Most Hits Music Today"} subtext={"Today's hits"} width={"100%"} image={require("../../Images/musicListning.png")} id={"110858205"}/>
     <Spacer/>
     <View style={{
       flexDirection:"row",
       gap:10,
       justifyContent:"space-around",
       paddingHorizontal:10,
     }}>
       <SmallBentooCard text={"Pop Hits"} image={require("../../Images/party.jpg")}  width={180}/>
       <SmallBentooCard text={"Lofi Beats"} image={require("../../Images/lofi.jpg")} width={180}/>
     </View>
   </MainWrapper>
  );
};
