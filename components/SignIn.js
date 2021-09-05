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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUsersByEmail, addUsers } from '../services/Users';
import SignUp from './SignUp';


export default class SignIn extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        email: 'admin',
        password: 'admin'
    }

    onLoginButton = () => {
        if(this.state.email == this.state.password){
            this.props.navigation.navigate('Home', { name: this.state.email });
            this.setState({
                email: '',
                password: ''
            });
        } else {
            alert("Username and Password should be same.")
        }
    }

    goToSignup = () => {
        this.props.navigation.navigate('SignUp', {});
    }

    re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={[ styles.loginButton1 ]}>
                        <Text style={[styles.login1]}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.loginButton2 ]} onPress={this.goToSignup}>
                        <Text style={[styles.login2]}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        value = {this.state.password}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>

                <View styles={styles.continue}>
                <TouchableHighlight style={[styles.continueContainer, styles.loginButton]} onPress={() => this.onLoginButton()}>
                    <Text style={styles.loginText}>CONTINUE</Text>
                </TouchableHighlight>
                </View>

                <View>
                    <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: 'Montserrat-Black',
    },
    continue: {
        marginTop: 200,
    },
    inputContainer: {
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        marginTop: 29,
        height: 45,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flex: 1,
        color: 'black',
        fontSize: 20,
    },
    continueContainer: {
        height: 50,
        width: 250,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    continueContainer: {
        marginTop: 70,
        height: 50,
        width: 300,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6200EE",
    },
    loginButton1: {
        backgroundColor: "#6200EE",
        borderRadius: 60,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 25,
    },
    loginButton2: {
        borderRadius: 60,
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 25,
    },
    login2: {
        color: 'grey',
        fontSize: 16,
        fontWeight: '600',
    },
    login1: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    loginText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    forgotPassword:{
        padding: 40,
        fontSize: 15,
        color: "#6200EE",
    },
});
