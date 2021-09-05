import React from "react";
import { Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View ,Button, TouchableHighlight} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function OrderPlaced () {
    const navigation = useNavigation();

    const placeorder = () => {
        navigation.navigate('');   //next page link here
    }

    const home = () => {
        navigation.navigate(''); //home screen link
    }

    return(
        <TouchableOpacity >
            <TouchableOpacity onPress={() => {home()}}>
                <Image
                    style={styles.checkMark}
                    source={{
                    uri: "https://thumbs.dreamstime.com/b/purple-highlighter-cross-isolated-transparent-background-marker-pen-highlight-underline-vector-hand-drawn-graphic-stylish-215943419.jpg" ,
                    }}
                /> 
            </TouchableOpacity>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: "https://cdn1.iconfinder.com/data/icons/user-interface-colorful/48/check_circle-512.png" ,
                    }}
                />   
            </View>
            <Text style={styles.title}>Order Placed!</Text>
            <Text style={styles.text}>Your order was placed successfully.</Text>
            <TouchableHighlight style={[ styles.ordersButton ]} onPress={() => placeorder()}>
                    <Text style={styles.ordersText}> MY ORDERS</Text>
            </TouchableHighlight>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 20,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        marginLeft: 100,
        marginTop: 213,
        color: '#555555',
        fontWeight: '600'
    },
    text: {
      fontSize: 20,
      marginLeft:40,
      marginTop: 18,
      color: '#555555',
      fontWeight: '500'
    },
    tinyLogo: {
      width: 98,
      height: 98,
      marginTop:260,
    },
    ordersButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width:150,
        borderRadius:50,
        backgroundColor: "#6200ee",
        fontWeight:"800",
        color:'white',
        marginTop: 100,
        marginLeft:120,
    },
    ordersText: {
        color: 'white',
        fontWeight:"800"
    },
    checkMark: {
        width: 40,
        height: 40,
        marginLeft: 310,
        marginTop: 90,
        marginBottom: 10,
    }
});
