import Animated, { useAnimatedRef } from "react-native-reanimated";
import { LikedPagesTopHeader } from "../../Component/Library/TopHeaderLikedPages";
import { LikedDetails } from "../../Component/Library/LikedDetails";
import { useEffect, useState } from "react";
import { GetLikedSongs } from "../../LocalStorage/StoreLikedSongs";
import { EachSongCard } from "../../Component/Global/EachSongCard";
import { Dimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export const LikedSongPage = () => {
  const AnimatedRef = useAnimatedRef()
  const [LikedSongs, setLikedSongs] = useState([]);
  const width = Dimensions.get("window").width
  const theme = useTheme()
  async function getAllLikedSongs(){
    const Songs = await GetLikedSongs()
    const Temp = []
    // eslint-disable-next-line no-unused-vars
    for (const [_, value] of Object.entries(Songs.songs)) {
      Temp[value.count] = value
    }
    const Final = []
    Temp?.map((e)=>{
      if (e) {
        Final.push({
          url:e.url,
          title:e?.title,
          artist:e?.artist,
          artwork:e?.image,
          duration:e?.duration,
          id:e?.id,
          language:e?.language,
          artistID:e?.primary_artists_id,
        })
      }
    })
    setLikedSongs(Final)
  }
  useEffect(() => {
    getAllLikedSongs()
  }, []);
  return (
    <Animated.ScrollView scrollEventThrottle={16} ref={AnimatedRef} contentContainerStyle={{
      paddingBottom:55,
      backgroundColor:"rgba(0,0,0)",
    }}>
      <LikedPagesTopHeader AnimatedRef={AnimatedRef} url={require("../../Images/LikedSong.png")} />
      <LikedDetails name={"Liked Songs"} Data={LikedSongs}/>
     <View style={{paddingHorizontal:10, backgroundColor:theme.colors.background}}>
       {LikedSongs.map((e,i) =>{
         return <EachSongCard width={width * 0.95} Data={LikedSongs} index={i}  url={e?.url} id={e?.id} title={e?.title} artist={e?.artist} image={e?.artwork} language={e?.language} duration={e?.duration} artistID={e?.artistID} key={i}/>
       })}
     </View>
    </Animated.ScrollView>
  );
};
