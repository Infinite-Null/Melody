import { MainWrapper } from "../Layout/MainWrapper";
import Animated, { useAnimatedRef} from "react-native-reanimated";
import { PlaylistTopHeader } from "../Component/Playlist/PlaylistTopHeader";
import { View } from "react-native";
import { EachSongCard } from "../Component/Global/EachSongCard";
import { useEffect, useState } from "react";
import { LoadingComponent } from "../Component/Global/Loading";
import { useTheme } from "@react-navigation/native";
import { PlainText } from "../Component/Global/PlainText";
import { SmallText } from "../Component/Global/SmallText";
import { getAlbumData } from "../Api/Album";
import { AlbumDetails } from "../Component/Album/AlbumDetails";
import FormatArtist from "../Utils/FormatArtists";

export const Album = ({route}) => {
  const theme = useTheme();
  const AnimatedRef = useAnimatedRef()
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState({});
  const {id} = route.params
  async function fetchAlbumData(){
    try {
      setLoading(true)
      const data = await getAlbumData(id)
      setData(data)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchAlbumData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainWrapper>
      {Loading &&
        <LoadingComponent loading={Loading}/>}
      {!Loading &&  <>
        {Data?.data?.songs?.length > 0 && <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
          paddingBottom:80,
          backgroundColor:"#101010",
        }}>
          <PlaylistTopHeader AnimatedRef={AnimatedRef} url={Data?.data?.image[2]?.url ?? ""} />
          <AlbumDetails name={Data?.data?.name ?? ""} liked={false} releaseData={Data?.data?.year ?? ""}  Data={Data}/>
          {<View style={{
            paddingHorizontal:10,
            backgroundColor:"#101010",
            gap:7,
          }}>
            {Data?.data?.songs?.map((e,i)=><EachSongCard isFromPlaylist={true} Data={Data} index={i} artist={FormatArtist(e?.artists?.primary)} language={e?.language} playlist={true} artistID={e?.primary_artists_id} key={i} duration={e?.duration} image={e?.image[2]?.url} id={e?.id} width={"100%"} title={e?.name}  url={e?.downloadUrl} style={{
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
