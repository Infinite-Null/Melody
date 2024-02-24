import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./Home";
import { Playlist } from "../Playlist";
const Stack = createStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="HomePage" component={Home} />
      <Stack.Screen  name="Playlist" component={Playlist} />
    </Stack.Navigator>
  );
};
