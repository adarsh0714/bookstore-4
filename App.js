import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/Login'
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Orders from './components/Orders';
import Sign from './components/Start';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import OrderPlaced from './components/OrderPlaced';
import BookDescription from './components/Description';

import {DrawerContent} from './components/Drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
       <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>} screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: '#6200ee'}}}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="BookDetails" component={BookDetails}/>
        <Drawer.Screen name="Cart" component={Cart}/>
        <Drawer.Screen name="Orders" component={Orders}/>
      </Drawer.Navigator> 

  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign">
        <Stack.Screen options={{headerShown:false}} name="Sign" component={Sign} />
        <Stack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} />
        <Stack.Screen options={{headerShown:false}} name="OrderPlaced" component={OrderPlaced} />
        <Stack.Screen name="BookDescription" component={BookDescription} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={DrawerNav} />
      </Stack.Navigator>

      </NavigationContainer>

  );
}
export default App;
