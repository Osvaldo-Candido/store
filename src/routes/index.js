import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import SinglePage from '../pages/SingleProduct';
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleProduct"
        component={SinglePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
