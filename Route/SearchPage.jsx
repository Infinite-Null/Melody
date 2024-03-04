import { MainWrapper } from "../Layout/MainWrapper";
import { SearchBar } from "../Component/Global/SearchBar";
import Tabs from "../Component/Global/Tabs/Tabs";
import { useEffect, useState } from "react";
import { getSearchSongData } from "../Api/Songs";
import { View } from "react-native";
import SongDisplay from "../Component/SearchPage/SongDisplay";
import { LoadingComponent } from "../Component/Global/Loading";
import { getSearchPlaylistData } from "../Api/Playlist";
import PlaylistDisplay from "../Component/SearchPage/PlaylistDisplay";

export const SearchPage = () => {
  const [ActiveTab, setActiveTab] = useState(0)
  const [SearchText, setSearchText] = useState("")
  const [Loading, setLoading] = useState(false)
  const [Data, setData] = useState({});
  const limit = 20
  async function fetchSearchData(text){
    if (SearchText !== ""){
      try {
        setLoading(true)
        let data
        if (ActiveTab === 0){
          data = await getSearchSongData(text,1,limit)
        } else if (ActiveTab === 1){
          data = await getSearchPlaylistData(text,1,limit)
        }
        setData(data)
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
    }
  }
  useEffect(()=>{
      fetchSearchData(SearchText)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ActiveTab])
  return (
    <MainWrapper>
      <SearchBar onChange={(text)=>setSearchText(text)} onPressSearch={()=>{
        fetchSearchData(SearchText)
      }}/>
      <Tabs tabs={["Songs","Playlists","Albums"]} setState={setActiveTab} state={ActiveTab}/>
      {Loading && <LoadingComponent loading={Loading}/>}
      {!Loading && <View style={{
        paddingHorizontal:10,
      }}>
          {ActiveTab === 0 && <SongDisplay data={Data} limit={limit} Searchtext={SearchText}/>}
          {ActiveTab === 1 && <PlaylistDisplay data={Data} limit={limit} Searchtext={SearchText}/>}
      </View>}
    </MainWrapper>
  );
};
