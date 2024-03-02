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

export const Playlist = ({route}) => {
  const theme = useTheme();
  const AnimatedRef = useAnimatedRef()
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  const {id} = route.params
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
  return (
    <MainWrapper>
      {Loading &&
        <LoadingComponent loading={Loading}/>}
      {!Loading &&  <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={Data.data.image[2].link}/>
        <PlaylistDetails name={Data.data.name} liked={false} listener={Data.data.fanCount} onPlay={()=>{}}/>
        <View style={{
          paddingHorizontal:10,
          backgroundColor:theme.colors.background,
        }}>
          {Data.data.songs.map((e,i)=><EachSongCard key={i} image={e.image[2].link} id={e.id} width={"100%"} title={e.name} artist={e.primaryArtists} url={e.downloadUrl} style={{
            marginBottom:15,
          }}/>)}
          </View>
      </Animated.ScrollView>}
    </MainWrapper>
  );
};
