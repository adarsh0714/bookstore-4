import React, { useEffect, useState } from "react";
import { Image,Alert,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import {getBooks} from '../services/BookData';
import {doAdd} from '../services/CartData';
import { useNavigation } from "@react-navigation/core";

const Item = ({ item,style,onPress, goToDesc, alert}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={{
            flex: 1,
            padding:7,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'stretch',
        }}>

          <View style={{width:'40%'}}>
            <Image
                style={styles.photo}
                source={{
                uri:item.link,
                }}
            />
          </View>

          <View style={{width:'60%', padding:8,paddingLeft:14}}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.extra}>By : {item.by}</Text>
              <Text style={styles.extra}>Year : {item.year}</Text>
              <Text style={styles.extra}>Buy : ${item.buy}</Text>
              
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:38}}>
                  <TouchableOpacity style={styles.button} onPress={goToDesc}>
                    <Text style={styles.textbutton}>More</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={alert}>
                    <Text style={styles.textbutton}>+ ADD CART</Text>
                  </TouchableOpacity>
              </View>

          </View>

      </View>

    </TouchableOpacity>
);

const HomeScreen = () => {
    let bookDetails = getBooks();
    const [selectedId, setSelectedId] = useState(null);

    let navigation = useNavigation();

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#ffffff";
        return (
            <Item
            item={item}
            style={{ backgroundColor }}
            goToDesc = {() => {
              navigation.navigate('BookDescription', item);
          }}
            alert={()=>{createTwoButtonAlert(item.id)}}
            />
        );
    };

    const createTwoButtonAlert = (itemID) =>{
      Alert.alert(
        "Alert",
        "Are you sure you want to add item in cart?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            console.log(itemID);
            doAdd(itemID);
            console.log("OK Pressed");
          } }
        ]
      );
    }

    return (
        <SafeAreaView style={styles.container}>

          <View style={{flexDirection:"row",alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={bookDetails}
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
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 3,
  },
  subtitle: {
    height:50,
    fontSize:24,
  },
  extra:{
    fontSize:17,
  },
  photo: { 
    height: 200,
  },
  textbutton:{
    fontSize:16,
    color:'white',
    fontWeight:'bold'
  },
  button: {
    alignItems: 'center',
    borderRadius:5,
    backgroundColor: '#6200ee',
    padding: 7,
  }
});
  
export default HomeScreen;
