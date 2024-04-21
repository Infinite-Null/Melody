import { MainWrapper } from "../Layout/MainWrapper";
import { SearchBar } from "../Component/Global/SearchBar";
import Tabs from "../Component/Global/Tabs/Tabs";
import { useCallback, useEffect, useState } from "react";
import { getSearchSongData } from "../Api/Songs";
import { View } from "react-native";
import SongDisplay from "../Component/SearchPage/SongDisplay";
import { LoadingComponent } from "../Component/Global/Loading";
import { getSearchPlaylistData } from "../Api/Playlist";
import PlaylistDisplay from "../Component/SearchPage/PlaylistDisplay";
import { getSearchAlbumData } from "../Api/Album";
import AlbumsDisplay from "../Component/SearchPage/AlbumDisplay";
import { Spacer } from "../Component/Global/Spacer";

export const SearchPage = ({navigation}) => {
  const [ActiveTab, setActiveTab] = useState(0)
  const [query, setQuery] = useState("");
  // const [ApiQuery, setApiQuery] = useState("");
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
        else if (ActiveTab === 2){
          data = await getSearchAlbumData(text,1,limit)
        }
        setData(data)
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
    } else {
      setData([])
    }
  }
  const initialSearchCall = useCallback((term) => {
        fetchSearchData(term)
    },
    [],
  );
  useEffect(() => {
    if (SearchText){
      initialSearchCall(SearchText)
    } else {
      setData([])
    }
  }, [SearchText]);
  useEffect(() => {
    const timeoutId = setTimeout(()=>setSearchText(query), 400)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [query]);
  useEffect(()=>{
      fetchSearchData(SearchText)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ActiveTab])
  return (
    <MainWrapper>
      <Spacer/>
      <SearchBar navigation={navigation} onChange={(text)=>{
        setQuery(text)
        // setSearchText(text)
        // const id = setTimeout(()=>{
        //   fetchSearchData(SearchText)
        // },500)
        // TimeOuts.push(id)
        // TimeOuts.map((e,i)=>{
        //   if ( i < TimeOuts.length - 3){
        //     e.clearTimeout()
        //   }
        // })
      }}/>
      <Tabs tabs={["Songs","Playlists","Albums"]} setState={setActiveTab} state={ActiveTab}/>
      <Spacer height={15}/>
      {Loading && <LoadingComponent loading={Loading}/>}
      {!Loading && <View style={{
        paddingHorizontal:10,
      }}>
          {ActiveTab === 0 && !Loading && <SongDisplay data={Data} limit={limit} Searchtext={SearchText}/>}
          {ActiveTab === 1 && !Loading && <PlaylistDisplay data={Data} limit={limit} Searchtext={SearchText}/>}
          {ActiveTab === 2 && !Loading && <AlbumsDisplay data={Data} limit={limit} Searchtext={SearchText}/>}
      </View>}
    </MainWrapper>
  );
};
