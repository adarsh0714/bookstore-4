import React, { useEffect, useState } from "react";
import { Image,Alert,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button, ViewBase } from "react-native";
import { color } from "react-native-reanimated";
import {getBooks,getBookById} from '../services/BookData';
import { showCart,incrementCount,decrementCount} from "../services/CartData";
import { useNavigation } from '@react-navigation/native';

const Item = ({item,alert,AddItem,SubItem}) => (
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
                <TouchableOpacity onPress={()=>SubItem()} style={{backgroundColor:'lightgrey',width:40,borderRadius:40}}>
                      <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:30,color:'black',fontWeight:'600'}}>-</Text>
                      </View>
                </TouchableOpacity>

                <View><Text style={{fontSize:18, color:'black',padding:10}}>{item.count}</Text></View>

                <TouchableOpacity onPress={()=>AddItem()} style={{backgroundColor:'lightgrey',width:40,borderRadius:40}}>
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


    const [selectedId, setSelectedId] = useState(null);
    let [count, setCount] = useState(null);
    let [price, setPrice] = useState(null);
    let [cartDetails,setCartDetails]=useState([])
    let navigation = useNavigation();

    loadCart = async()=>{
      let cartService = showCart();
      let cartDetail = [];
      let totalCost=0
      temp={};
      for(let i=0;i<cartService.length;i++){
          var tempBookData = getBookById(cartService[i].bookID);
          temp['id']=cartService[i].bookID
          temp['count']=cartService[i].count;
          temp['by']=tempBookData.by;
          temp['buy']=tempBookData.buy;
          temp['subtitle']=tempBookData.subtitle;
          temp['link']=tempBookData.link;
          totalCost=totalCost+temp['count']*temp['buy']
          cartDetail.push(temp);
          temp ={};
      }
      setPrice(totalCost)
      setCartDetails(cartDetail)
    }
  
    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {
        loadCart();
      });
      return unsubscribe;
    },[navigation]);


    const renderItem = ({item}) => {
        return (
            <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            AddItem={()=>{
              console.log("wassup")
              incrementCount(item.id)
              loadCart();
            }}
            SubItem={()=>{
              console.log("wassup")
              decrementCount(item.id)
              loadCart();
            }}
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

    const createPlaceOrderAlert = () =>{
      Alert.alert(
        "Alert",
        "Are you sure you want to place Order?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            console.log("Order Placed")
          navigation.navigate('OrderPlaced')
        }}
        ]
      );
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:"column",alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            data={cartDetails}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
        <View style={{flexDirection:"row",alignItems: 'center', justifyContent:'space-evenly',height:130,width:390}}>
          <View style={{flexDirection:"column",alignItems:'flex-start', justifyContent:'flex-start',backgroundColor:'#f4f4f4',height:120,width:195}}>
              <Text style={{fontSize:16,color:'darkgrey'}}>TOTAL</Text>
              <Text style={{fontSize:24}}>${price}</Text>
              <Text style={{fontSize:16,color:'darkgrey'}}>Free Domestic Shipping</Text>
          </View>
          <View style={{flexDirection:"column",backgroundColor:'#f4f4f4',height:120,paddingTop:20}}>
            <TouchableOpacity onPress={createPlaceOrderAlert} style={{alignItems: 'center', justifyContent: 'center',backgroundColor:'#6200ee',borderRadius:50}}>
            <Text style={{fontSize:18,color:'white',padding:14,height:50,width:160,fontWeight:'bold'}}>PLACE ORDER</Text>
            </TouchableOpacity>
          </View>
        </View>
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
