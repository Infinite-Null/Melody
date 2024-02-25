import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { Heading } from "../../Component/Global/Heading";
import { PlainText } from "../../Component/Global/PlainText";
import { SmallText } from "../../Component/Global/SmallText";
import { Logo } from "../../Component/Global/Logo";
export const Home = () => {
  return (
    <MainWrapper>
      <Spacer/>
      <Heading text={"Top 50's"}/>
      <PlainText text={"Hello"}/>
      <SmallText text={"Hello"}/>
      <Logo text={"elody"}/>
    </MainWrapper>
  );
};

