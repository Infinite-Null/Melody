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
import { getAlbumData } from "../Api/Album";
import { PlainText } from "../Component/Global/PlainText";
import { SmallText } from "../Component/Global/SmallText";

export const Playlist = ({route}) => {
  const theme = useTheme();
  const AnimatedRef = useAnimatedRef()
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  const {id,Album} = route.params
  async function fetchPlaylistData(){
    try {
      setLoading(true)
      let data={}
      if (Album === true) {
        data = await getAlbumData(id)
      }
      else {
        data = await getPlaylistData(id)
      }
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

  const NotReleased = Data?.data?.releaseDate === "" && Data?.data?.year === "0" && Data.data.songs[0].downloadUrl === false
  return (
    <MainWrapper>
      {Loading &&
        <LoadingComponent loading={Loading}/>}
      {!Loading &&  <>
      {Data?.data?.songs?.length > 0 && <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={NotReleased?"https://cdn.dribbble.com/users/2426611/screenshots/8292520/404_presentaxxtion_4x.jpg" : Data?.data?.image[2]?.link ?? ""}/>
        <PlaylistDetails name={Data?.data?.name ?? ""} liked={false} listener={Data?.data?.fanCount ?? ""} onPlay={()=>{}} Album={Album} releasedDate={Data?.data?.releaseDate ?? ""} notReleased = {NotReleased}/>
        {!NotReleased && <View style={{
          paddingHorizontal:10,
          backgroundColor:theme.colors.background,
        }}>
          {Data?.data?.songs?.map((e,i)=><EachSongCard key={i} image={e.image[2].link} id={e.id} width={"100%"} title={e.name} artist={e.primaryArtists} url={e.downloadUrl} style={{
            marginBottom:15,
          }}/>)}
        </View>}
        {NotReleased && <View style={{
          flex:1,
          backgroundColor:"black",
          alignItems:"center",
          justifyContent:"center",
          height:250,
        }}>
          <PlainText text={"Album not available"}/>
          <SmallText text={"Not Available"}/>
        </View>}
      </Animated.ScrollView>}
      </>}
      {Data?.data?.songs?.length <= 0 && <View style={{
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
