import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    SafeAreaView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Sign extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Welcome to Book Store'
    };

    onSigninButton = () => {
        //this.props.navigation.navigate('Signin');
        //func needs to get called
        this.props.navigation.navigate('SignIn');
        }

    onSignupButton = () => {
        //this.props.navigation.navigate('Signup');
        this.props.navigation.navigate('SignUp');
        }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                 source={require('../components/BookStore.png')}
                 style={{position:'absolute',top:0,width:390}}
                />
        <Text style={styles.base1Text}>Welcome</Text>
        <Text style={styles.base2Text}>to Book Store</Text>
        <Text style={styles.base3Text}>Let's get Started!</Text>
        <TouchableHighlight style={[styles.buttonContainer1, styles.loginButton1,styles.x]} onPress={() => this.onSigninButton()}>
                <Text style={styles.loginText}>SIGN IN</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer2, styles.loginButton2,styles.y]} onPress={() => this.onSignupButton()}>
                <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    base1Text:{
        marginTop:400,
        fontFamily:'Cochin',
        fontSize:40,
        marginHorizontal:100,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom:0,
    },
    base2Text:{
        marginTop:0,
        fontFamily: 'Cochin',
        marginHorizontal:50,
        fontSize:35,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom: 0,
    },
    base3Text:{
        marginTop:10,
        fontFamily: 'Cochin',
        fontSize:15,
        marginHorizontal:120,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6200EE',
        marginBottom: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    buttonContainer1: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        borderRadius: 0,
    },
    buttonContainer2: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        borderRadius: 0,
    },
    loginButton1: {
        backgroundColor: "#9599B3",
        justifyContent: 'center',
    },
    loginButton2: {
        backgroundColor: "#6200EE",
        justifyContent: 'center',
    },
    x: {
        marginTop:100,
        justifyContent: 'center',
        marginLeft:120,   
    },
    y: {
        marginTop:0,
        justifyContent: 'center',
        marginLeft:120,   
    },
    loginText: {
        color: 'white',
        fontWeight:"bold",
    },

});
