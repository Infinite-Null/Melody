import { Playlist } from "../Playlist";
import { createStackNavigator } from '@react-navigation/stack';
import { Discover } from "./Discover";
const Stack = createStackNavigator();

export const DiscoverRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="DiscoverPage" component={Discover} />
      <Stack.Screen options={{headerShown:false}} name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
};
