import { TrendingSongLayout } from "../../Layout/TrendingSongLayout";
import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../../Api/Playlist";
import { LoadingComponent } from "./Loading";
import { getPromiseSongData } from "../../Api/Songs";
import { Heading } from "./Heading";
import FormatArtist from "../../Utils/FormatArtists";

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
      {id && <>
        <Heading text={Loading ? "Please Wait..." : Data?.data?.name}/>
        {!Loading && <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          paddingRight:50,
        }}>
          <TrendingSongLayout>
            {Data?.data?.songs?.slice(0,4)?.map((e,i)=><EachSongCard titleWidth={width * 0.63} artistWidth={width * 0.55}  artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={"100%"} title={e?.name}  url={e?.downloadUrl}/>)}
          </TrendingSongLayout>
          <TrendingSongLayout>
            {Data?.data?.songs?.slice(4,8)?.map((e,i)=><EachSongCard titleWidth={width * 0.63} artistWidth={width * 0.55}  artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={"100%"} title={e?.name}  url={e?.downloadUrl} />)}
          </TrendingSongLayout>
        </ScrollView>}
        {Loading && <View style={{
          height:280,
        }}>
          <LoadingComponent loading={Loading}/>
        </View>}
      </>}
    </>
  );
};
