import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SIGN IN" component={Signin} />
      <Stack.Screen name="SIGN UP" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
