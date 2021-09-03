import React, { useEffect, useState } from "react";
import { Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import {getBooks} from '../service/BookData';

const Item = ({ item,style,onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'stretch',
            padding:7,
        }}>

            <Image
                style={styles.photo}
                source={{
                uri:item.link,
                }}
            />
            <View style={{padding:5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
        </View>
    </TouchableOpacity>
);


const HomeScreen = () => {
    let books = getBooks();
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffffff";
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:"row",alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={books}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />   
            </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 3,
        marginHorizontal: 2,
        width:191,
    },
    title: {
        fontSize: 24,
    },
    subtitle: {
        fontSize: 18,
    },
    photo: { 
        alignSelf:'center',
        width:150,
        height: 220,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 7,
      marginBottom: 5
    }
});
  
export default HomeScreen;