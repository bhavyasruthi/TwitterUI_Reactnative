import React, { Component } from 'react';
import { Text,Image} from 'react-native';
import {Header,Left,Button,Icon,Right,Body,Title,Container} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default class AppFooter extends Component {
    render() {
        return (
                <Header style={{backgroundColor:'white',shadowOffset: {height: 0, width: 0},
                shadowOpacity: 0}}>
                <Left>
                <Text>
                <Text style={{fontWeight:'bold',color:'#00aced'}}> All </Text>
                <Text style={{fontWeight:'bold',color:'grey'}}>     Mentions </Text>
                </Text>
                </Left>
                                <Right>
                <Button transparent>
                <Feather style={{fontSize : 20,fontWeight:'bold',color:'#00aced'}} name='settings' />
                </Button>
                </Right>
                </Header>
                );
    }
}

module.exports = AppFooter;
