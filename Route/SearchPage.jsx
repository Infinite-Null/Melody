import { MainWrapper } from "../Layout/MainWrapper";
import { SearchBar } from "../Component/Global/SearchBar";
import Tabs from "../Component/Global/Tabs/Tabs";
import { useState } from "react";
import { getSearchSongData } from "../Api/Songs";
import { View } from "react-native";
import SongDisplay from "../Component/SearchPage/SongDisplay";
import { LoadingComponent } from "../Component/Global/Loading";

export const SearchPage = () => {
  const [ActiveTab, setActiveTab] = useState(0)
  const [SearchText, setSearchText] = useState("")
  const [Loading, setLoading] = useState(false)
  const [Data, setData] = useState({});
  const limit = 20
  async function fetchSearchData(text){
    try {
      setLoading(true)
      const data = await getSearchSongData(text,1,limit)
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
        fetchSearchData(SearchText)
      }}/>
      <Tabs tabs={["Songs","Playlists","Albums"]} setState={setActiveTab} state={ActiveTab}/>
      {Loading && <LoadingComponent loading={Loading}/>}
      {!Loading && <View style={{
        paddingHorizontal:10,
      }}>
          <SongDisplay data={Data} limit={limit} Searchtext={SearchText}/>
      </View>}
    </MainWrapper>
  );
};
