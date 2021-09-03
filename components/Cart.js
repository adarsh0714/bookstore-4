import React, { useEffect, useState } from "react";
import { Image,Alert,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import { color } from "react-native-reanimated";
import {getBooks,getBookById} from '../service/BookData';
import { showCart,incrementCount,decrementCount} from "../service/CartData";

const Item = ({item,alert}) => (
    <View style={[styles.item]}>
        <View style={{
            flex: 1,
            padding:7,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'stretch',
        }}>

          <View style={{width:'40%',justifyContent:'center',alignItems:'center',borderRadius:60,backgroundColor:'white'}}>
            <Image
                style={styles.photo}
                source={{
                uri:item.link,
                }}
            />
          </View>

          <View style={{width:'60%', padding:8,paddingLeft:14}}>
              <Text style={{fontSize:24}}>{item.subtitle}</Text>
              <Text style={{fontSize:18}}>By : {item.by}</Text>

              <Text style={{paddingTop:20,paddingBottom:10,color:'red',fontSize:18}}> ${item.buy}</Text>
              
              <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <TouchableOpacity onPress={()=>{console.log("- Pressed")}} style={{backgroundColor:'lightgrey',width:40,borderRadius:40}}>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:30,color:'black',fontWeight:'600'}}>-</Text>
                      </View>
                </TouchableOpacity>

                <View><Text style={{fontSize:18, color:'black',padding:10}}>9</Text></View>

                <TouchableOpacity onPress={()=>{console.log("- Pressed")}} style={{backgroundColor:'lightgrey',width:40,borderRadius:40}}>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:30,color:'black'}}>+</Text>
                      </View>
                </TouchableOpacity>
              </View>
          </View>
      </View>
    </View>
);

const HomeScreen = () => {
    // let cartService = showCart();
    // let cartDetails = [];
    // temp={};
    // for(let i=0;i<cartService.length;i++){
    //     let tempBookData = getBookById(cartService[i].bookID);
    //     temp['count']=cartService[i].count;
    //     temp['by']=tempBookData.by;
    //     temp['buy']=tempBookData.buy;
    //     temp['subtitle']=tempBookData.subtitle;
    //     temp['link']=tempBookData.link;    
    // }
    

    let cartDetails = getBooks();
    const [selectedId, setSelectedId] = useState(null);
    let [count, setCount] = useState(null);

    const renderItem = ({item}) => {
        return (
            <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            alert={()=>{createTwoButtonAlert()}}
            />
        );
    };

    const createTwoButtonAlert = () =>{
      Alert.alert(
        "Alert",
        "Are you sure you want to add item in cart?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }

    return (
        <SafeAreaView style={styles.container}>

          <View style={{flexDirection:"row",alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={cartDetails}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
          </View>
          <View style={{backgroundColor:"green",justifyContent:'flex-end',height:80,flexDirection:'row'}}>
              <Text style={{fontSize:30}}>Adarsh </Text>
          </View>
          <View style={{backgroundColor:"red",justifyContent:'flex-end',height:80,flexDirection:'row'}}>
              <Text style={{fontSize:30}}>Adarsh </Text>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f4',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 3,
  },
  subtitle: {
    fontSize:22,
  },
  price:{
    fontSize:17,
  },
  photo: { 
    height: 110,
    width:110,
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