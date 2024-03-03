import { MainWrapper } from "../Layout/MainWrapper";
import { SearchBar } from "../Component/Global/SearchBar";
import Tabs from "../Component/Global/Tabs/Tabs";
import { useEffect, useState } from "react";
import { getSearchSongData } from "../Api/Songs";
import { Dimensions, FlatList, View } from "react-native";
import { EachSongCard } from "../Component/Global/EachSongCard";

export const SearchPage = () => {
  const width = Dimensions.get("window").width
  const [ActiveTab, setActiveTab] = useState(0)
  const [SearchText, setSearchText] = useState("")
  const [Loading, setLoading] = useState(true)
  const [Page, setPage] = useState(1)
  const [Data, setData] = useState({});
  const limit = 20
  async function fetchSearchData(text,page){
    try {
      setLoading(true)
      const data = await getSearchSongData(text,page,limit)
      setData(data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  return (
    <MainWrapper>
      <SearchBar onChange={(text)=>setSearchText(text)} onPressSearch={()=>{
        fetchSearchData(SearchText,Page)
      }}/>
      <Tabs tabs={["Songs","Playlists","Albums"]} setState={setActiveTab} state={ActiveTab}/>
      <View style={{
        paddingHorizontal:10,
      }}>
        <FlatList contentContainerStyle={{
          paddingBottom:120,
        }} data={Data?.data?.results ?? []} renderItem={(item)=><EachSongCard titleWidth={width * 0.63} artistWidth={width * 0.55}  image={item.item.image[2].link} id={item.item.id} width={width * 0.7} title={item.item.name} artist={item.item.primaryArtists} url={item.item.downloadUrl}/>}/>
      </View>
    </MainWrapper>
  );
};
