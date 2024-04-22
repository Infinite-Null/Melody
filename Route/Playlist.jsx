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
import FormatArtist from "../Utils/FormatArtists";

export const Playlist = ({route}) => {
  const theme = useTheme();
  const AnimatedRef = useAnimatedRef()
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  // const [Links, setLinks] = useState([]);
  const {id, image, name, follower} = route.params
  async function fetchPlaylistData(){
    try {
      setLoading(true)
      let data = {}
      data = await getPlaylistData(id)
      console.log(data);
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
       <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
        paddingBottom:80,
         backgroundColor:"#101010",
      }}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={image} />
        <PlaylistDetails id={id} image={image} name={name} follower={follower} listener={follower ?? ""} releasedDate={Data?.data?.releaseDate ?? ""} Data={Data}  Loading={Loading}/>
         {Loading &&
           <LoadingComponent loading={Loading} height={200}/>}
        {!Loading && <View style={{
          paddingHorizontal:10,
          backgroundColor:"#101010",
          gap:7,
        }}>
          {Data?.data?.songs?.map((e,i)=><EachSongCard Data={Data} isFromPlaylist={true} index={i}  artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={"100%"} title={e?.name}  url={e?.downloadUrl} style={{
            marginBottom:15,
          }}/>)}
        </View>}
      </Animated.ScrollView>
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
