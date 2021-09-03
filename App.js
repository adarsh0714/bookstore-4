import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import Sign from './components/Start';

import BookDetailsScreen from './component/BookDetails';
import CartScreen from './component/Cart';
import HomeScreen from './component/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Sign">
      <Stack.Screen name="Sign" component={Sign} />
      <Stack.Screen name="Login" component={Login} />
        
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
