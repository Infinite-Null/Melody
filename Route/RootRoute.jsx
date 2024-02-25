import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeRoute } from "./Home/HomeRoute";
import { DiscoverRoute } from "./Discover/DiscoverRoute";
import { LibraryRoute } from "./Library/LibraryRoute";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, { FadeInDown } from "react-native-reanimated";
const Tab = createBottomTabNavigator();
export const RootRoute = () => {
  const eachTabColor = {
    backgroundColor:"rgb(43,68,169)",
    color:"rgb(222,222,222)",
  }
  return (
    <>
      <Tab.Navigator  screenOptions={{tabBarLabelStyle:{
        fontWeight:"bold",
        },tabBarInactiveTintColor:"rgb(98,99,103)",tabBarActiveTintColor:"rgb(43,68,169)",headerShown:false, tabBarStyle: {
          backgroundColor:"rgb(28,27,28)",
          borderColor:"rgb(28,27,28)"}}}>
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Animated.View key={Math.random() + Math.random() + Math.random()} entering={FadeInDown.duration(150)} style={{
              backgroundColor:eachTabColor.backgroundColor,
              height:size + 15,
              width:size + 15,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:10,
              marginBottom:10,
              elevation:4,
            }}><Octicons name="home" color={eachTabColor.color} size={size - 5} /></Animated.View> : <Octicons name="home" color={color} size={size-2} />
          ),
        }} name="Home" component={HomeRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Animated.View key={Math.random() + Math.random() + Math.random()} entering={FadeInDown.duration(150)} style={{
              backgroundColor:eachTabColor.backgroundColor,
              height:size + 15,
              width:size + 15,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:10,
              marginBottom:10,
              elevation:4,
            }}><Entypo name="compass" color={eachTabColor.color} size={size - 5} /></Animated.View> : <Entypo name="compass" color={color} size={size - 2} />
          ),
        }} name="Discover" component={DiscoverRoute} />
        <Tab.Screen options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size, focused }) => (
            focused ? <Animated.View key={Math.random() + Math.random() + Math.random()} entering={FadeInDown.duration(150)} style={{
              backgroundColor:eachTabColor.backgroundColor,
              height:size + 15,
              width:size + 15,
              alignItems:"center",
              justifyContent:"center",
              borderRadius:10,
              marginBottom:10,
              elevation:4,
            }}><MaterialCommunityIcons name="music-box-multiple-outline" color={eachTabColor.color} size={size - 5} /></Animated.View> : <MaterialCommunityIcons name="music-box-multiple-outline" color={color} size={size - 2} />
          ),
        }}  name="Library" component={LibraryRoute} />
      </Tab.Navigator>
    </>
  );
};
