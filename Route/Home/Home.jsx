import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { Logo } from "../../Component/Global/Logo";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
export const Home = () => {
  return (
    <MainWrapper>
      <Spacer/>
      <Logo text={"elody"}/>
      <Spacer/>
      <LargeBentooCard text={"Top Most Hitz Music in 2023"} subtext={"2023 hitz"} width={"100%"} onPress={()=>{}} backgroundColor={"rgb(78,155,76)"} image={require("../../Images/musicListning.png")}/>
    </MainWrapper>
  );
};

