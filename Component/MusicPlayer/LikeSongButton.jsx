import { useTheme } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { memo, useContext, useEffect, useState } from "react";
import { GetLikedSongs, SetLikedSongs } from "../../LocalStorage/StoreLikedSongs";
import { Pressable } from "react-native";
import Context from "../../Context/Context";

export const LikeSongButton = memo(function LikeSongButton({size}) {
  const {currentPlaying} = useContext(Context)
  const theme = useTheme()
  const [Liked, setLiked] = useState(false);
  async function getIsLiked(){
    const LikedSongs = await GetLikedSongs()
    if (LikedSongs[currentPlaying.id]) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }
  async function LikeASong(){
    setLiked(true)
    const LikedSongs = await GetLikedSongs()
    if (!LikedSongs[currentPlaying.id]) {
      await  SetLikedSongs(currentPlaying?.title,currentPlaying?.artist,currentPlaying?.image,currentPlaying?.id,currentPlaying?.url,currentPlaying?.duration,currentPlaying?.language)
    }
  }
  useEffect(() => {
    getIsLiked()
  }, [currentPlaying]);
  return (
    <Pressable onPress={()=>{
      if (Liked === false){
        LikeASong()
      }
    }}>
      <AntDesign name={Liked ? "heart" : "hearto"} size={size ? size : 15} color={Liked ? 'rgb(234,113,113)' : theme.colors.text}/>
    </Pressable>
  );
})
