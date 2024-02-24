import { Playlist } from "../Playlist";
import { createStackNavigator } from '@react-navigation/stack';
import { Library } from "./Library";
const Stack = createStackNavigator();
export const LibraryRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="LibraryPage" component={Library} />
      <Stack.Screen options={{headerShown:false}} name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
};

