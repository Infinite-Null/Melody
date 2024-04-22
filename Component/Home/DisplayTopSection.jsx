import { View } from "react-native";
import { EachSmallCardHome } from "./EachSmallCardHome";
import { Spacer } from "../Global/Spacer";
import { memo } from "react";

export const DisplayTopSection = memo(({playlist}) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const Random1 = getRandomInt(0,playlist.length - 1)
  const Random2 = getRandomInt(0,playlist.length - 1)
  return (
    <>
      <View style={{flexDirection:"row", justifyContent:"space-around", paddingHorizontal:10, gap:10}}>
        <EachSmallCardHome name={"Liked Songs"} image={require("../../Images/LikedSong.png")} subtitle={"liked by you"} navigate={"LikedSongs"}/>
        <EachSmallCardHome name={"Liked Playlist"} image={require("../../Images/LikedPlaylist.png")} subtitle={"liked by you"} navigate={"LikedPlaylists"}/>
      </View>
      <Spacer/>
      <View style={{flexDirection:"row", justifyContent:"space-around", paddingHorizontal:10, gap:10}}>
        <EachSmallCardHome name={playlist[Random1].title} image={playlist[Random1].image[2].link} isPlaylist={true} subtitle={playlist[Random1].subtitle} id={playlist[Random1].id}/>
        <EachSmallCardHome name={playlist[Random2].title} image={playlist[Random2].image[2].link} isPlaylist={true} subtitle={playlist[Random2].subtitle} id={playlist[Random2].id}/>
      </View>
    </>
  );
});
