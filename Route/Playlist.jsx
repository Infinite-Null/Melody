import { MainWrapper } from "../Layout/MainWrapper";
import Animated, { useAnimatedRef} from "react-native-reanimated";
import { PlaylistTopHeader } from "../Component/Playlist/PlaylistTopHeader";
import { PlaylistDetails } from "../Component/Playlist/PlaylistDetails";
import { View } from "react-native";
import { EachSongCard } from "../Component/Global/EachSongCard";
import { useEffect, useState } from "react";
import { getPlaylistData } from "../Api/Playlist";
import { LoadingComponent } from "../Component/Global/Loading";
import { useTheme } from "@react-navigation/native";
import { PlainText } from "../Component/Global/PlainText";
import { SmallText } from "../Component/Global/SmallText";
import { getPromiseSongData } from "../Api/Songs";

export const Playlist = ({route}) => {
  const theme = useTheme();
  const AnimatedRef = useAnimatedRef()
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  const [Links, setLinks] = useState([]);
  const {id} = route.params
  async function fetchPlaylistData(){
    try {
      setLoading(true)
      let data={}
      let SongLinks=[]
        data = await getPlaylistData(id)
        const Songs = data.songs.map((e)=>{
          return getPromiseSongData(e.id)
        })
        const SongData = await Promise.all(Songs)
        SongLinks = SongData.map(e=>{
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainWrapper>
      {Loading &&
        <LoadingComponent loading={Loading}/>}
      {!Loading &&  <>
      {Data?.songs?.length > 0 && <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
        paddingBottom:55,
        backgroundColor:"black",
      }}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={Data?.image ?? ""} />
        <PlaylistDetails name={Data?.listname ?? ""} liked={false} listener={Data?.follower_count ?? ""} releasedDate={Data?.data?.releaseDate ?? ""} Data={Data} Links={Links}/>
        {<View style={{
          paddingHorizontal:10,
          backgroundColor:theme.colors.background,
        }}>
          {Data?.songs?.map((e,i)=><EachSongCard language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={Links[i]?.image} id={e?.id} width={"100%"} title={e?.song} artist={e?.primary_artists} url={Links[i]?.url} style={{
            marginBottom:15,
          }}/>)}
        </View>}
      </Animated.ScrollView>}
      </>}
      {Data?.songs?.length <= 0 && <View style={{
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
      }}>
        <PlainText text={"Playlist not available"}/>
        <SmallText text={"not available"}/>
        </View>}
    </MainWrapper>
  );
};
