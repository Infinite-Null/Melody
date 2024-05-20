import { Playlist } from "../Playlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Library } from "./Library";
import { LikedSongPage } from "./LikedSongPage";
import { LikedPlaylistPage } from "./LikedPlaylistPage";
import { AboutProject } from "./AboutProject";
import { YoutubeMusic } from "./YoutubeMusic";
import { YoutubeMusicPlaylistScreen } from "./YoutubeMusicPlaylistScreen";
const Stack = createNativeStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, animation:'fade_from_bottom'}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
      <Stack.Screen  name="Playlist" component={Playlist} />
      <Stack.Screen name={"LikedSongs"} component={LikedSongPage}/>
      <Stack.Screen name={"LikedPlaylists"} component={LikedPlaylistPage}/>
      <Stack.Screen name={"AboutProject"} component={AboutProject}/>
      <Stack.Screen name={"YoutubeMusic"} component={YoutubeMusic}/>
      <Stack.Screen name={"YoutubeMusicPlaylist"} component={YoutubeMusicPlaylistScreen}/>
    </Stack.Navigator>
  );
};

