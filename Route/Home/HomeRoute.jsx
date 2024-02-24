import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./Home";
import { Playlist } from "../Playlist";
const Stack = createStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="HomePage" component={Home} />
      <Stack.Screen options={{headerShown:false}} name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
};
