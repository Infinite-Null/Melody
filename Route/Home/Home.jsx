import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { Logo } from "../../Component/Global/Logo";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { View } from "react-native";
export const Home = () => {
  return (
    <MainWrapper>
      <Spacer/>
      <Logo text={"elody"}/>
      <Spacer/>
      <LargeBentooCard text={"Top Most Hitz Music in 2023"} subtext={"2023 hitz"} width={"100%"} onPress={()=>{}} backgroundColor={"rgb(78,155,76)"} image={require("../../Images/musicListning.png")}/>
      <Spacer/>
      <View style={{
        flexDirection:"row",
        justifyContent:'space-between',
        gap:10,
      }}>
        <SmallBentooCard width={"49%"} image={require("../../Images/relax.png")} backgroundColor={"rgb(77,87,136)"} text={"RELAX"}/>
        <SmallBentooCard width={"49%"} image={require("../../Images/listen.png")} backgroundColor={"rgb(97,77,136)"} text={"POP"}/>
      </View>
    </MainWrapper>
  );
};

