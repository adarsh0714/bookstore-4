import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SIGN IN" component={Login} />
      <Stack.Screen name="SIGN UP" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
