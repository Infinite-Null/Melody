import { MainWrapper } from "../../Layout/MainWrapper";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";

export const Discover = () => {
  return (
   <MainWrapper>
     <LargeBentooCard text={"Top Most Hits Music Today"} subtext={"Today's hits"} width={"100%"} image={require("../../Images/musicListning.png")} id={"110858205"}/>
   </MainWrapper>
  );
};
