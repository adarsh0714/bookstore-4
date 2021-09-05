import React, { useEffect, useState } from "react";
import { Image,Alert,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const BookDescription = (props) => {
  
  let item = props.route.params;
  console.log(item);

  return (
    <View>
      <View style={styles.subtitle}>
        <Text style={styles.title}>{item.subtitle}</Text>
      </View>
      <View>
            <Image
                style={styles.photo}
                source={{
                uri:item.link,
                }}
            />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>By : {item.by}</Text>
        <Text style={styles.text}>Year : {item.year}</Text>
        <Text style={styles.text}>Buy : ${item.buy}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Elit at imperdiet dui accumsan sit amet nulla facilisi. 
          Lectus sit amet est placerat. 
          Accumsan sit amet nulla facilisi morbi. 
          Sed risus ultricies tristique nulla aliquet enim tortor. 
          Mi eget mauris pharetra et. 
          Euismod nisi porta lorem mollis aliquam. 
          Tortor aliquam nulla facilisi cras fermentum. 
          Ut porttitor leo a diam sollicitudin tempor id eu nisl. 
          Duis convallis convallis tellus id interdum velit laoreet id. 
          Magna fermentum iaculis eu non. 
          Commodo odio aenean sed adipiscing. </Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  photo: { 
    height: 300,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    marginBottom: 20,
  },
  subtitle: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: "#6200EE",
    fontSize: 28,
    fontFamily: "Montserrat-Regular"
  },
  text: {
    color: "#6200EE",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    paddingBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  desc: {
    paddingRight: 23,
    paddingLeft: 23,
    alignContent: 'space-between',
    fontFamily: "Montserrat-Regular",
    textAlign: 'justify',
    fontSize: 14
  },
  descContainer: {
    alignContent: 'space-between'
  }
})


export default BookDescription;