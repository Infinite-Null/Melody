import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Tab.Screen options={{
          headerShown:false,
        }} name="Home" component={HomeRoute} />
        <Tab.Screen name="Discover" component={DiscoverRoute} />
        <Tab.Screen name="Library" component={LibraryRoute} />
      </Tab.Navigator>
    </>
  );
};
