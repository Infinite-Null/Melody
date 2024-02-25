import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { Logo } from "../../Component/Global/Logo";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { Dimensions, ScrollView, View } from "react-native";
import { SearchBar } from "../../Component/Home/SearchBar";
import { Heading } from "../../Component/Global/Heading";
import { EachSongCard } from "../../Component/Global/EachSongCard";
import { TrendingSongLayout } from "../../Layout/TrendingSongLayout";
export const Home = () => {
  const width = Dimensions.get("window").width
  return (
    <MainWrapper>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom:20,
      }}>
        <Spacer/>
        <Logo text={"elody"}/>
        <Spacer/>
        <SearchBar/>
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
        <Spacer/>
        <Heading text={"Trending Songs"}/>
        <Spacer/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TrendingSongLayout>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do forever"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
          </TrendingSongLayout>
          <TrendingSongLayout>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
            <EachSongCard image={"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg"} title={"Love Me Like you Do"} artist={"Ankit Kumar Shah"} width={width * 0.7}/>
          </TrendingSongLayout>
        </ScrollView>
      </ScrollView>
    </MainWrapper>
  );
};

