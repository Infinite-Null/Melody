
import { Home } from "./Home";
import { Playlist } from "../Playlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchPage } from "../SearchPage";
import { Album } from "../Album";
const Stack = createNativeStackNavigator();
export const HomeRoute = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
      <Stack.Screen  name="HomePage" component={Home} />
      <Stack.Screen  name="Playlist" component={Playlist} />
      <Stack.Screen name={"Album"} component={Album}/>
      <Stack.Screen  name="Search" component={SearchPage} />
    </Stack.Navigator>
  );
};
