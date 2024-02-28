import { MainWrapper } from "../../Layout/MainWrapper";
import { LargeBentooCard } from "../../Component/Home/LargeBentooCard";
import { FlatList, ScrollView, View } from "react-native";
import { Heading } from "../../Component/Global/Heading";
import { HorizontalScrollSongs } from "../../Component/Global/HorizontalScrollSongs";
import { RouteHeading } from "../../Component/Global/RouteHeading";
import { useTheme } from "@react-navigation/native";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { EachAlbumCard } from "../../Component/Global/EachAlbumCard";
import { RenderTopCharts } from "../../Component/Home/RenderTopCharts";
import { LoadingComponent } from "../../Component/Global/Loading";
import { useEffect, useState } from "react";
import { getHomePageData } from "../../Api/HomePage";
import { EachPlaylistCard } from "../../Component/Global/EachPlaylistCard";
import Animated, { FadeInDown, FlipInEasyX, FlipInXDown, SlideInDown, ZoomInDown } from "react-native-reanimated";
export const Home = () => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({});
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
  const topChats = [
    {
      name:"Most Searched",
      follower:"1.2k follower",
      image:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
    },
    {
      name:"Most Searched",
      follower:"1.2k follower",
      image:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
    },
    {
      name:"Most Searched",
      follower:"1.2k follower",
      image:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
    },
    {
      name:"Most Searched",
      follower:"1.2k follower",
      image:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
    },
    {
      name:"Most Searched",
      follower:"1.2k follower",
      image:"https://c.saavncdn.com/editorial/MostSearchedSongsEnglish_20240108090530.jpg",
    },
  ]
  const theme = useTheme()
  async function fetchHomePageData(){
    try {
      setLoading(true)
      const data = await getHomePageData("hindi,english")
      setData(data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchHomePageData()
  }, []);
  return (
    <MainWrapper>
      <LoadingComponent loading={Loading}/>
      {
        !Loading &&  <Animated.View entering={FadeInDown.springify()}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingBottom:20,
          }}>
            <RouteHeading text={"Home"}/>
            <LargeBentooCard text={"Top Most Hitz Music in 2023"} subtext={"2023 hitz"} width={"100%"} onPress={()=>{}} image={require("../../Images/musicListning.png")}/>
            <PaddingConatiner>
              <Heading text={"Recommended"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }} data={Data?.data?.playlists ?? []} renderItem={(item,i)=><EachPlaylistCard name={item.item.title} follower={item.item.subtitle} key={item.index} image={item.item.image[2].link}/>}/>
            <PaddingConatiner>
              <Heading text={"Trending Songs"}/>
              <HorizontalScrollSongs songs={songs}/>
              <Heading text={"Trending Albums"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }} data={Data?.data?.trending?.albums??[]} renderItem={(item)=><EachAlbumCard image={item.item.image[2].link} artists={item.item.artists} key={item.index} name={item.item.name} id={item.item.id}/>}/>
            <PaddingConatiner>
              <Heading text={"Top Romantic"}/>
              <HorizontalScrollSongs songs={songs}/>
            </PaddingConatiner>
            <PaddingConatiner>
              <Heading text={"Top Charts"}/>
            </PaddingConatiner>
            {/*<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{*/}
            {/*  paddingLeft:13,*/}
            {/*}}>*/}
            {/*  <RenderTopCharts playlist={topChats}/>*/}
            {/*</ScrollView>*/}
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }}  data={[1]} renderItem={()=><RenderTopCharts playlist={Data.data.charts.filter((e)=>e.type==='playlist')}/>}/>
            <PaddingConatiner>
              <Heading text={"Recommended Albums"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }} data={Data?.data?.albums??[]} renderItem={(item)=><EachAlbumCard image={item.item.image[2].link} artists={item.item.artists} key={item.index} name={item.item.name} id={item.item.id}/>}/>
          </ScrollView>
        </Animated.View>
      }
    </MainWrapper>
  );
};

