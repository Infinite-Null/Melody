import { useEffect, useState } from "react";
import { DeleteALikedPlaylist, GetLikedPlaylist, SetLikedPlaylist } from "../../LocalStorage/StoreLikedPlaylists";
import { Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTheme } from "@react-navigation/native";

export const LikedPlaylist = ({id, image, name, follower}) => {
  const theme = useTheme()
  const [Liked, setLiked] = useState(false);
  async function setIsLiked(){
    const likedPlaylists = await GetLikedPlaylist()
    if (likedPlaylists.playlist[id]){
        setLiked(true)
    } else {
      setLiked(false)
    }
  }
async function storeLikedSongs(){
  const likedPlaylists = await GetLikedPlaylist()
  if (!likedPlaylists.playlist[id]){
    await SetLikedPlaylist(image, name, follower, id)
    setIsLiked(true)
  } else {
    await DeleteALikedPlaylist(id)
    setIsLiked(false)
  }
}
  useEffect(() => {
    setIsLiked()
  }, []);
  return (
    <Pressable onPress={()=>{
      storeLikedSongs()
    }}>
      <AntDesign size={20} name={Liked ? "heart" : "hearto"} color={Liked ? 'rgb(227,97,97)' : theme.colors.text}/>
    </Pressable>
  );
};
