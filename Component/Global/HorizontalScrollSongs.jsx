import { TrendingSongLayout } from "../../Layout/TrendingSongLayout";
import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../../Api/Playlist";
import { LoadingComponent } from "./Loading";

export const HorizontalScrollSongs = ({id}) => {
  const width = Dimensions.get("window").width
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  async function fetchPlaylistData(){
    try {
      setLoading(true)
      const data = await getPlaylistData(id)
      setData(data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchPlaylistData()
  }, []);
  return ( <>
      {!Loading && <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingRight:50,
      }}>
        <TrendingSongLayout>
          {Data.data.songs.slice(0,4).map((e,i)=><EachSongCard artistID={e?.primaryArtistsId} language={e.language} duration={e.duration} titleWidth={width * 0.63} artistWidth={width * 0.55} key={i} image={e.image[2].link} id={e.id} width={width * 0.7} title={e.name} artist={e.primaryArtists} url={e.downloadUrl}/>)}
        </TrendingSongLayout>
        <TrendingSongLayout>
          {Data.data.songs.slice(4,8).map((e,i)=><EachSongCard artistID={e?.primaryArtistsId} language={e.language} duration={e.duration} titleWidth={width * 0.63} artistWidth={width * 0.55} key={i} image={e.image[2].link} id={e.id} width={width * 0.7} title={e.name} artist={e.primaryArtists} url={e.downloadUrl}/>)}
        </TrendingSongLayout>
      </ScrollView>}
      {Loading && <View style={{
        height:280,
      }}>
        <LoadingComponent loading={Loading}/>
      </View>}
    </>
  );
};
