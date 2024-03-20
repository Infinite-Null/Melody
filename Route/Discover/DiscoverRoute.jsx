import { Playlist } from "../Playlist";
import { createStackNavigator } from '@react-navigation/stack';
import { Discover } from "./Discover";
import { SearchPage } from "../SearchPage";
const Stack = createStackNavigator();

export const DiscoverRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="DiscoverPage" component={Discover} />
      <Stack.Screen  name="Playlist" component={Playlist} />
      <Stack.Screen  name="Search" component={SearchPage} />
    </Stack.Navigator>
  );
};
