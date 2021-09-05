import React, { useEffect, useState } from "react";
import { Image,Alert,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, ViewBase } from "react-native";
import { color } from "react-native-reanimated";
import {getBooks,getBookById} from '../service/BookData';
import { showOrderData,incrementCount,decrementCount} from "../service/CartData";

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
              <Text style={{paddingTop:20,paddingBottom:10,color:'red',fontSize:18}}> Amount - $ {item.buy}</Text>
              <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                <View><Text style={{fontSize:18, color:'black',padding:10}}>Quantity - {item.count}</Text></View>
              </View>
          </View>
      </View>
    </View>
);

const HomeScreen = () => {
    let cartService = showOrderData();
    let cartDetails = [];
    temp={};
    for(let i=0;i<cartService.length;i++){
        var tempBookData = getBookById(cartService[i].bookID);
        temp['count']=cartService[i].count;
        temp['by']=tempBookData.by;
        temp['buy']=tempBookData.buy;
        temp['subtitle']=tempBookData.subtitle;
        temp['link']=tempBookData.link; 
        cartDetails.push(temp);
        temp ={};
    }

    const [selectedId, setSelectedId] = useState(null);
    let [count, setCount] = useState(null);
    let [price, setPrice] = useState(null);

    const renderItem = ({item}) => {
        return (
            <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            alert={()=>{createTwoButtonAlert()}}
            />
        );
    };
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"column",alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={cartDetails}
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
    backgroundColor:'#f4f4ff',
    flex: 1,
    flexDirection:'column',
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