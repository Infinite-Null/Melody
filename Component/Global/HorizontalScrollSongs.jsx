import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../../Api/Playlist";
import { LoadingComponent } from "./Loading";
import { Heading } from "./Heading";
import FormatArtist from "../../Utils/FormatArtists";
import { Spacer } from "./Spacer";

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
        <Spacer/>
        <Spacer/>
        <Heading text={Loading ? "Please Wait..." : Data?.data?.name} nospace={true}/>
        <Spacer/>
        {!Loading && <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            {Data?.data?.songs?.slice(0,4)?.map((e,i)=><View style={{marginBottom:7}}>
              <EachSongCard index={i} isFromPlaylist={true} Data={Data} artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={width * 0.80} title={e?.name}  url={e?.downloadUrl} titleandartistwidth={width * 0.5}/>
            </View>)}
          </View>
          <View>
            {Data?.data?.songs?.slice(4,8)?.map((e,i)=><View style={{marginBottom:7}}>
              <EachSongCard index={i + 4} Data={Data} isFromPlaylist={true}  artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={width * 0.80} title={e?.name}  url={e?.downloadUrl} titleandartistwidth={width * 0.5}/>
            </View>)}
          </View>
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
