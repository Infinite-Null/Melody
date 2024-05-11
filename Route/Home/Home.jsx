import { MainWrapper } from "../../Layout/MainWrapper";
import { FlatList, ScrollView, View } from "react-native";
import { Heading } from "../../Component/Global/Heading";
import { HorizontalScrollSongs } from "../../Component/Global/HorizontalScrollSongs";
import { RouteHeading } from "../../Component/Home/RouteHeading";
import { PaddingConatiner } from "../../Layout/PaddingConatiner";
import { EachAlbumCard } from "../../Component/Global/EachAlbumCard";
import { RenderTopCharts } from "../../Component/Home/RenderTopCharts";
import { LoadingComponent } from "../../Component/Global/Loading";
import { useEffect, useState } from "react";
import { getHomePageData } from "../../Api/HomePage";
import { EachPlaylistCard } from "../../Component/Global/EachPlaylistCard";
import { GetLanguageValue } from "../../LocalStorage/Languages";
import { TopHeader } from "../../Component/Home/TopHeader";
import { DisplayTopGenres } from "../../Component/Home/DisplayTopGenres";
export const Home = () => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({});
  const [showHeader, setShowHeader] = useState(false);

  async function fetchHomePageData(){
    try {
      setLoading(true)
      const Languages = await GetLanguageValue()
      const data = await getHomePageData(Languages)
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
        !Loading &&  <View>
          <ScrollView style={{zIndex:-1}} onScroll={(e)=>{
            if (e.nativeEvent.contentOffset.y > 200 && !showHeader){
              setShowHeader(true)
            } else if (e.nativeEvent.contentOffset.y < 200 && showHeader) {
              setShowHeader(false)
            }
          }} showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingBottom:90,
          }}>
            <RouteHeading showSearch={true} showSettings={true}/>
             {/*<DisplayTopSection playlist={Data.data.charts.filter((e)=>e.type === 'playlist')}/>*/}
            <DisplayTopGenres/>
            <PaddingConatiner>
              <HorizontalScrollSongs id={Data.data.charts[0].id}/>
              <Heading text={"Recommended"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
              gap:15,
            }} data={Data?.data?.playlists ?? []} renderItem={(item,i)=><EachPlaylistCard name={item.item.title} follower={item.item.subtitle} key={item.index} image={item.item.image[2].link} id={item.item.id}/>}/>
            <PaddingConatiner>
              <Heading text={"Trending Albums"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }} data={Data?.data?.trending?.albums ?? []} renderItem={(item)=><EachAlbumCard image={item.item.image[2].link} artists={item.item.artists} key={item.index} name={item.item.name} id={item.item.id}/>}/>
            <PaddingConatiner>
              <HorizontalScrollSongs id={Data?.data?.charts[1]?.id}/>
            </PaddingConatiner>
            <PaddingConatiner>
              <Heading text={"Top Charts"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }}  data={[1]} renderItem={()=><RenderTopCharts playlist={Data.data.charts}/>}/>
            <PaddingConatiner>
              <HorizontalScrollSongs id={Data?.data?.charts[3]?.id}/>
            </PaddingConatiner>
            <PaddingConatiner>
              <Heading text={"Recommended Albums"}/>
            </PaddingConatiner>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
              paddingLeft:13,
            }} data={Data?.data?.albums ?? []} renderItem={(item)=><EachAlbumCard image={item?.item?.image[2]?.link ?? ""} artists={item.item.artists} key={item.index} name={item.item.name} id={item.item.id}/>}/>
            <PaddingConatiner>
              <HorizontalScrollSongs id={Data?.data?.charts[2]?.id}/>
            </PaddingConatiner>
          </ScrollView>
          <TopHeader showHeader={showHeader}/>
        </View>
      }
    </MainWrapper>
  );
};

