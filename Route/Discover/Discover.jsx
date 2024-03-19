import { MainWrapper } from "../../Layout/MainWrapper";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { Dimensions, View } from "react-native";
import { Spacer } from "../../Component/Global/Spacer";

export const Discover = () => {
 const width = Dimensions.get("window").width
  return (
   <MainWrapper>
     <LargeBentooCard text={"Top Most Hits Music Today"} subtext={"Today's hits"} width={"100%"} image={require("../../Images/Trending.jpg")} id={"110858205"}/>
     <Spacer/>
     <View style={{
       flexDirection:"row",
       gap:10,
       justifyContent:"space-around",
       paddingHorizontal:10,
     }}>
       <SmallBentooCard text={"Pop Hits"} image={require("../../Images/party.jpg")}  width={width * 0.46}/>
       <SmallBentooCard text={"Lofi Beats"} image={require("../../Images/lofi.jpg")} width={width * 0.46}/>
     </View>
   </MainWrapper>
  );
};
