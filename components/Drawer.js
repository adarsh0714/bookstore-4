import React from 'react'
import { View,StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'


export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://www.pexels.com/photo/man-smiling-behind-wall-220453/'
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Deepak</Title>
                                <Caption style={styles.caption}></Caption>
                            </View>
                        </View>
                        <View style={{marginTop:30,marginLeft:5,paddingLeft:10,width:130,borderRadius:40,borderColor:'#bfbbbb',borderWidth:1}}>
                                <Title style={{color:'#474646'}}>Edit Profile</Title>
                        </View>
                    </View>
                    <View
  style={{
    marginTop:20,
    marginLeft:15,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    width:"80%"
  }}
/>

                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="home-outline"
                    color={color}
                    size={size}/>
                )}
                label="Home"
                onPress={()=>{props.navigation.navigate('Home')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="newspaper-outline"
                    color={color}
                    size={size}/>
                )}
                label="Book Details"
                onPress={()=>{props.navigation.navigate('BookDetails')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="cart-outline"
                    color={color}
                    size={size}/>
                )}
                label="Cart"
                onPress={()=>{props.navigation.navigate('Cart')}}
                />
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="briefcase-outline"
                    color={color}
                    size={size}/>
                )}
                label="Orders"
                onPress={()=>{props.navigation.navigate('Orders')}}
                />

                </Drawer.Section>
                <Drawer.Section>
                <DrawerItem
                icon={({color,size})=>(
                    <Icon
                    name="log-out-outline"
                    color={color}
                    size={size}/>
                )}
                label="LOG OUT"
                onPress={()=>{props.navigation.navigate('Sign')}}
                />
                </Drawer.Section>
                                               
                </View>
                </DrawerContentScrollView>

            
        </View>

    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 10,
    },
    bottomDrawerSection: {
        marginTop: 65,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
