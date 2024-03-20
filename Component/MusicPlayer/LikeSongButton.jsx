import { useTheme } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { memo, useContext, useEffect, useState } from "react";
import { DeleteALikedSong, GetLikedSongs, SetLikedSongs } from "../../LocalStorage/StoreLikedSongs";
import { Pressable } from "react-native";
import Context from "../../Context/Context";

export const LikeSongButton = memo(function LikeSongButton({size}) {
  const {currentPlaying} = useContext(Context)
  const theme = useTheme()
  const [Liked, setLiked] = useState(false);
  async function getIsLiked(){
    const LikedSongs = await GetLikedSongs()
    if (LikedSongs.songs[currentPlaying.id]) {
      setLiked(true)
    } else {
      setLiked(false)
    }
  }
  async function LikeASong(){
    const LikedSongs = await GetLikedSongs()
    if (!LikedSongs.songs[currentPlaying.id]) {
      if (currentPlaying.title && currentPlaying.artist && currentPlaying.image && currentPlaying.id && currentPlaying.downloadUrl && currentPlaying.duration ){
        setLiked(true)
        await  SetLikedSongs(currentPlaying?.title,currentPlaying?.artist,currentPlaying?.image,currentPlaying?.id,currentPlaying?.downloadUrl,currentPlaying?.duration,currentPlaying?.language)
      }
    } else {
      setLiked(false)
      await DeleteALikedSong(currentPlaying.id)
    }
  }
  useEffect(() => {
    getIsLiked()
  }, [currentPlaying]);
  return (
    <Pressable onPress={()=>{
        LikeASong()
    }}>
      <AntDesign name={Liked ? "heart" : "hearto"} size={size ? size : 15} color={Liked ? 'rgb(234,113,113)' : theme.colors.text}/>
    </Pressable>
  );
})
