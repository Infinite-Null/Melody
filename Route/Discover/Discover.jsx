import { MainWrapper } from "../../Layout/MainWrapper";
import { LargeBentooCard } from "../../Component/Discover/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { Dimensions, ScrollView, View } from "react-native";
import { Spacer } from "../../Component/Global/Spacer";
import { Heading } from "../../Component/Global/Heading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { BundleEachLanguage } from "../../Component/Discover/BundleEachLanguage";
import { DiscoverRouteHeading } from "../../Component/Discover/DiscoverRouteHeading";

export const Discover = () => {
 const width = Dimensions.get("window").width
  return (
   <MainWrapper>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:100}}>
      <DiscoverRouteHeading/>
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
      <PaddingConatiner>
        <Heading text={"Languages"}/>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{gap:10}}>
          <BundleEachLanguage languages={["English", "Hindi"]}/>
          <BundleEachLanguage languages={["Punjabi", "Tamil"]}/>
          <BundleEachLanguage languages={["Telugu", "Marathi"]}/>
          <BundleEachLanguage languages={["Gujarati", "Bengali"]}/>
          <BundleEachLanguage languages={["Kannada", "Bhojpuri"]}/>
          <BundleEachLanguage languages={["Malayalam", "Urdu"]}/>
          <BundleEachLanguage languages={["Odia", "Assamese"]}/>
        </ScrollView>
        <Heading text={"Moments"}/>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{gap:10}}>
          <BundleEachLanguage languages={["Workout", "Focus"]}/>
          <BundleEachLanguage languages={["Chill", "Party"]}/>
          <BundleEachLanguage languages={["Long Drive", "Sleep"]}/>
          <BundleEachLanguage languages={["Late Night", "Dance"]}/>
        </ScrollView>
        <Heading text={"Genres"}/>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{gap:10}}>
          <BundleEachLanguage languages={["Hip Hop", "Jazz"]}/>
          <BundleEachLanguage languages={["Retro", "Classical"]}/>
          <BundleEachLanguage languages={["K-Pop", "Lofi"]}/>
          <BundleEachLanguage languages={["Romance", "Sad"]}/>
        </ScrollView>
      </PaddingConatiner>
    </ScrollView>
   </MainWrapper>
  );
};
