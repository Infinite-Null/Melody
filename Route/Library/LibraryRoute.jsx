import { Playlist } from "../Playlist";
import { createStackNavigator } from '@react-navigation/stack';
import { Library } from "./Library";
const Stack = createStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="LibraryPage" component={Library} />
      <Stack.Screen  name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
};

