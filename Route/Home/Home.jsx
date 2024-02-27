import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { SmallBentooCard } from "../../Component/Home/SmallBentooCard";
import { ScrollView, View } from "react-native";
import { SearchBar } from "../../Component/Home/SearchBar";
import { Heading } from "../../Component/Global/Heading";
import { HorizontalScrollSongs } from "../../Component/Global/HorizontalScrollSongs";
import { EachPlaylistCard } from "../../Component/Global/EachPlaylistCard";
import { RouteHeading } from "../../Component/Global/RouteHeading";
import { useTheme } from "@react-navigation/native";
export const Home = () => {
  const songs = [
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
    {
      song:"Love me like you do",
      image:"https://t3.ftcdn.net/jpg/02/72/14/56/360_F_272145619_0msru0f2296jsjEliBht6ZcdUjqZwLZn.jpg",
      artist:"Ankit Kumar Shah",
    },
  ]
  const theme = useTheme()
  return (
    <MainWrapper>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom:20,
      }}>
        <Spacer/>
        <Spacer/>
        <RouteHeading text={"Home"}/>
        <Spacer/>
        <Spacer/>
        <LargeBentooCard text={"Top Most Hitz Music in 2023"} subtext={"2023 hitz"} width={"100%"} onPress={()=>{}} backgroundColor={theme.colors.primary} image={require("../../Images/musicListning.png")}/>
        <Spacer/>
        <Spacer/>
        <Heading text={"Trending Songs"}/>
        <Spacer/>
        <HorizontalScrollSongs songs={songs}/>
        <Spacer/>
        <Heading text={"Romantic Top 40"}/>
        <Spacer/>
        <HorizontalScrollSongs songs={songs}/>
        <EachPlaylistCard/>
      </ScrollView>
    </MainWrapper>
  );
};

