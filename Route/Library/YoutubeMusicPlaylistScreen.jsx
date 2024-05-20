import { MainWrapper } from "../../Layout/MainWrapper";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import { PlaylistTopHeader } from "../../Component/Playlist/PlaylistTopHeader";
import { View } from "react-native";
import { PlainText } from "../../Component/Global/PlainText";
import { SmallText } from "../../Component/Global/SmallText";
import { YoutubeMusicDetails } from "../../Component/YoutubeMusic/YoutubeMusicDetails";
import { EachSongCard } from "../../Component/Global/EachSongCard";

export const YoutubeMusicPlaylistScreen = ({route}) => {
  const {data} = route.params
  const AnimatedRef = useAnimatedRef()
  return (
    <MainWrapper>
      <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
        paddingBottom:80,
        backgroundColor:"#101010",
      }}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={data?.thumbnail} />
        <YoutubeMusicDetails songs={data?.songs} name={data?.title}/>
        {<View style={{
          paddingHorizontal:10,
          backgroundColor:"#101010",
          gap:7,
        }}>
          {data?.songs?.map((e,i)=><EachSongCard isYoutubePlaylist={true} thumbnail={e?.image} title={e?.title} id={e?.id} duration={e?.duration} artists={e?.artist} isYoutubeMusic={true} url={e?.url} index={i} songData={data?.songs}/>)}
        </View>}
      </Animated.ScrollView>
      {data?.length <= 0 && <View style={{
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
