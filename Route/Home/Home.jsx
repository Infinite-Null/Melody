import { MainWrapper } from "../../Layout/MainWrapper";
import { Spacer } from "../../Component/Global/Spacer";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { ScrollView } from "react-native";
import { Heading } from "../../Component/Global/Heading";
import { HorizontalScrollSongs } from "../../Component/Global/HorizontalScrollSongs";
import { EachPlaylistCard } from "../../Component/Global/EachPlaylistCard";
import { RouteHeading } from "../../Component/Global/RouteHeading";
import { useTheme } from "@react-navigation/native";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
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
        <RouteHeading text={"Home"}/>
        <LargeBentooCard text={"Top Most Hitz Music in 2023"} subtext={"2023 hitz"} width={"100%"} onPress={()=>{}} backgroundColor={theme.colors.primary} image={require("../../Images/musicListning.png")}/>
        <PaddingConatiner>
          <Heading text={"Recommended"}/>
        </PaddingConatiner>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          paddingLeft:13,
        }}>
          <EachPlaylistCard/>
          <EachPlaylistCard/>
          <EachPlaylistCard/>
          <EachPlaylistCard/>
          <EachPlaylistCard/>
        </ScrollView>
        <PaddingConatiner>
          <Heading text={"Trending Songs"}/>
          <HorizontalScrollSongs songs={songs}/>
          <Heading text={"Romantic Top 40"}/>
          <HorizontalScrollSongs songs={songs}/>
        </PaddingConatiner>
      </ScrollView>
    </MainWrapper>
  );
};

