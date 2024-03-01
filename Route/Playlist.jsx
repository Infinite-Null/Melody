import { MainWrapper } from "../Layout/MainWrapper";
import { View } from "react-native";
import { PlainText } from "../Component/Global/PlainText";
import { SmallText } from "../Component/Global/SmallText";
import Animated, { useAnimatedRef} from "react-native-reanimated";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import { PlaylistTopHeader } from "../Component/Playlist/PlaylistTopHeader";

export const Playlist = () => {

  const theme = useTheme()
  const AnimatedRef = useAnimatedRef()

  return (
    <MainWrapper>
      <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef}>
        <PlaylistTopHeader AnimatedRef={AnimatedRef} url={"https://c.saavncdn.com/editorial/charts_TrendingToday_134351_20230826113717.jpg?bch=1709258401"}/>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(36,41,62,0.06)', 'rgb(36,41,62)', theme.colors.background]} style={{
          alignItems:"center",
          justifyContent:"center",
          height:100,
        }}>
          <PlainText text={"Trending Today"}/>
          <SmallText text={"Total 50 Songs and 7,60,843 followers"}/>
        </LinearGradient>
        <View start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#4c669f', '#3b5998', '#192f6a']} style={{
          height:6000,
          alignItems:"center",
          backgroundColor:theme.colors.background,
        }}></View>
      </Animated.ScrollView>
    </MainWrapper>
  );
};
