import { TrendingSongLayout } from "../../Layout/TrendingSongLayout";
import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../../Api/Playlist";
import { LoadingComponent } from "./Loading";
import { getPromiseSongData } from "../../Api/Songs";
import { Heading } from "./Heading";

export const HorizontalScrollSongs = ({id}) => {
  const width = Dimensions.get("window").width
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  const [Links, setLinks] = useState([]);

  async function fetchPlaylistData(){
    try {
      setLoading(true)
      const data = await getPlaylistData(id)
      const Songs = data.songs.map((e)=>{
        return getPromiseSongData(e.id)
      })
      const SongData = await Promise.all(Songs)
      const SongLinks = SongData.map(e=>{
        return {
          url:e.data.data[0].downloadUrl,
          image:e.data.data[0].image[2].url,
        }
      })
      setLinks(SongLinks)
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
      <Heading text={Loading ? "Please Wait..." : Data?.listname}/>
      {!Loading && <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingRight:50,
      }}>
        <TrendingSongLayout>
          {Data?.songs?.slice(0,4)?.map((e,i)=><EachSongCard language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} titleWidth={width * 0.63} artistWidth={width * 0.55} duration={e?.duration} width={width * 0.7} image={Links[i]?.image} id={e?.id} title={e?.song} artist={e?.primary_artists} url={Links[i]?.url} />)}
        </TrendingSongLayout>
        <TrendingSongLayout>
          {Data?.songs?.slice(4,8)?.map((e,i)=><EachSongCard language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} titleWidth={width * 0.63} artistWidth={width * 0.55} duration={e?.duration} width={width * 0.7} image={Links[i + 4]?.image} id={e?.id} title={e?.song} artist={e?.primary_artists} url={Links[i + 4]?.url} />)}
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
