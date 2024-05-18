import { EachSongCard } from "./EachSongCard";
import { Dimensions, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../../Api/JioSavan/Playlist";
import { LoadingComponent } from "./Loading";
import { Heading } from "./Heading";
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
        {!Loading && <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{
            justifyContent:'space-between',
            width:width * 0.80,
            marginRight:10,
          }}>
            {Data?.data?.songs?.slice(0,4)?.map((e,i)=><View style={{marginBottom:7}}>
              <EachSongCard thumbnail={e?.image[2]?.url} title={e?.name} id={e?.id} duration={e?.duration} artists={e?.artists?.primary ?? []} isYoutubeMusic={false} url={e?.downloadUrl[4]?.url} index={i} songData={Data?.data ?? []}/>
            </View>)}
          </View>
          <View style={{
            justifyContent:'space-between',
            width:width * 0.80,
            marginRight:10,
          }}>
            {Data?.data?.songs?.slice(4,8)?.map((e,i)=><View style={{marginBottom:7}}>
              <EachSongCard thumbnail={e?.image[2]?.url} title={e?.name} id={e?.id} duration={e?.duration} artists={e?.artists?.primary ?? []} isYoutubeMusic={false} url={e?.downloadUrl[4]?.url} index={i + 4} songData={Data?.data ?? []}/>
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
