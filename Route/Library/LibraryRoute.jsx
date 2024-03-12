import { Playlist } from "../Playlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Library } from "./Library";
import { LikedSongPage } from "./LikedSongPage";
const Stack = createNativeStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, animation:'fade_from_bottom'}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
      <Stack.Screen  name="Playlist" component={Playlist} />
      <Stack.Screen name={"LikedSongs"} component={LikedSongPage}/>
    </Stack.Navigator>
  );
};

