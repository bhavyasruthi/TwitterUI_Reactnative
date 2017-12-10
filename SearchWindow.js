import React from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import { Container, Header, Item, Input, Button, Left, Right, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppFooter from './AppFooter';
import HomeScreenDrawer from './Home';


const SearchWindow = (props) => {
    const {navigation} = props;
    return (
            <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <Header hasTabs style={{backgroundColor:'white',elevation: 0}}>
            <Left >
            <Button transparent
            onPress={()=>navigation.navigate("HomeStack")}>
            <Ionicons name="ios-arrow-round-back" style={{fontWeight:bold ,fontSize: 23}} color='#00aced'/>
            </Button>
            </Left>
            <Body >
            <Item style={{width:250}}>
            <Input placeholder="Search Twitter"/>
            </Item>
            </Body>
            <Right/>
            </Header>
            </View>
            );
};

SearchWindow.navigationOptions = {
title: "SearchWindow"
};

export default SearchWindow;
