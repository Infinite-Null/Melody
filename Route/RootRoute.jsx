import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{ headerShown:false}}>
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons name="home" color={color} size={focused ? size + 2 : size} />
          ),
        }} name="Home" component={HomeRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo name="compass" color={color} size={focused ? size + 2 : size} />
          ),
        }} name="Discover" component={DiscoverRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="music-box-multiple-outline" color={color} size={focused ? size + 2 : size} />
          ),
        }}  name="Library" component={LibraryRoute} />
      </Tab.Navigator>
    </>
  );
};
