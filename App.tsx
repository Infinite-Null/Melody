
import { NavigationContainer } from "@react-navigation/native";
import {RootRoute} from "./Route/RootRoute";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator()
export default function App(){
  return  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name="LoginScreen" component={RootRoute} />
    </Stack.Navigator>
  </NavigationContainer>
}
