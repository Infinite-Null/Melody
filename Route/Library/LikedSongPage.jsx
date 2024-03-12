import Animated, { useAnimatedRef } from "react-native-reanimated";
import { LikedPagesTopHeader } from "../../Component/Library/TopHeaderLikedPages";
import { LikedDetails } from "../../Component/Library/LikedDetails";

export const LikedSongPage = () => {
  const AnimatedRef = useAnimatedRef()
  return (
    <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
      paddingBottom:55,
      backgroundColor:"black",
    }}>
      <LikedPagesTopHeader AnimatedRef={AnimatedRef} url={require("../../Images/LikedSong.png")} />
      <LikedDetails name={"Liked Songs"} />
    </Animated.ScrollView>
  );
};
