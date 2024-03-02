import { MainWrapper } from "../Layout/MainWrapper";
import Animated, { useAnimatedRef} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import { PlaylistTopHeader } from "../Component/Playlist/PlaylistTopHeader";
import { PlaylistDetails } from "../Component/Playlist/PlaylistDetails";
import { View } from "react-native";

export const Playlist = () => {
  const theme = useTheme()
  const AnimatedRef = useAnimatedRef()

  return (
    <MainWrapper>
      <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={"https://c.saavncdn.com/editorial/charts_TrendingToday_134351_20230826113717.jpg?bch=1709258401"}/>
        <PlaylistDetails name={"Trending Today"} liked={true} listener={"7,60,843"} onPlay={()=>{}}/>
        <View style={{
          height:100000,
          backgroundColor:"black",
        }}/>
      </Animated.ScrollView>
    </MainWrapper>
  );
};
