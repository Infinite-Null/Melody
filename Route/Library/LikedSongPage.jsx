import Animated, { useAnimatedRef } from "react-native-reanimated";
import { LikedPagesTopHeader } from "../../Component/Library/TopHeaderLikedPages";
import { LikedDetails } from "../../Component/Library/LikedDetails";
import { useEffect, useState } from "react";
import { GetLikedSongs } from "../../LocalStorage/StoreLikedSongs";
import { EachSongCard } from "../../Component/Global/EachSongCard";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

export const LikedSongPage = () => {
  const AnimatedRef = useAnimatedRef()
  const [LikedSongs, setLikedSongs] = useState([]);
  const theme = useTheme()
  async function getAllLikedSongs(){
    const Songs = await GetLikedSongs()
    const Temp = []
    for (const [key, value] of Object.entries(Songs.songs)) {
      Temp[value.count] = value
    }
    setLikedSongs(Temp)
  }
  useEffect(() => {
    getAllLikedSongs()
  }, []);
  return (
    <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
      paddingBottom:55,
      backgroundColor:"black",
    }}>
      <LikedPagesTopHeader AnimatedRef={AnimatedRef} url={require("../../Images/LikedSong.png")} />
      <LikedDetails name={"Liked Songs"} Data={LikedSongs}/>
     <View style={{paddingHorizontal:10, backgroundColor:theme.colors.background}}>
       {LikedSongs.map((e,i)=>{
         if(e) return <EachSongCard isLibraryLiked={true} url={e?.url} id={e?.id} title={e?.title} artist={e?.artist} image={e?.image} language={e?.language} duration={e?.duration} artistID={e?.artistID} key={i}/>
       })}
     </View>
    </Animated.ScrollView>
  );
};
