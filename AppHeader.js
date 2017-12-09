import React, { Component } from 'react';
import {
    Text,Image,StyleSheet, View, Platform
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title,Container} from 'native-base';

const AppHeader = (props) => {
    const {navigation} = props;
    return (
                <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                    <Header hasTabs style={{backgroundColor:'white',elevation: 0}}>
                    <Left >
                        <Button transparent
                        onPress={()=>navigation.navigate("DrawerOpen")}>
                        <Image style={styles.image} source={require('./ProfilePic.png' )}/>
                        </Button>
                    </Left>
                    <Body >
                        <Text style={styles.title}>Home</Text>
                        <Title color='red' >Home</Title>
                    </Body>
                    <Right/>
                    </Header>
                </View>
                );
    }


var styles = StyleSheet.create({
                               image: {
                               height: 35,
                               borderRadius: 50,
                               width: 40
                               },
                               title:{
                               fontWeight : 'bold',
                               fontSize :20,
                               color : 'black',
                               paddingTop:9,
                               paddingBottom :  3
                               }
                               });

export default AppHeader
//module.exports = AppHeader;
