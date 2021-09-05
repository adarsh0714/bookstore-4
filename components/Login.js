
  import React, { Component } from 'react';
  import {
      StyleSheet,
      Text,
      View,
      TextInput,
      Button,
      TouchableHighlight,
      Image,
      Alert
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  
  
  export default function Login() {
      let navigation=useNavigation();
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>In Login Screen</Text>
        <Button
        onPress={() => navigation.navigate('BookStore')}
        title="Login"
      />

        </View>
      );
    }
  
  