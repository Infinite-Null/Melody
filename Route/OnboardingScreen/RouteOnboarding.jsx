import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
// import { Slide4 } from "./Slide4";

const Stack = createNativeStackNavigator();
export const RouteOnboarding = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
      <Stack.Screen  name="Slide1" component={Slide1} />
      <Stack.Screen  name="Slide2" component={Slide2} />
      <Stack.Screen  name="Slide3" component={Slide3} />
      {/*<Stack.Screen  name="Slide4" component={Slide4} />*/}
    </Stack.Navigator>
  );
};


