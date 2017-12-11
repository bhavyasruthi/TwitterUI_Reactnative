import React from 'react';
import { StyleSheet, Text, View , Platform, KeyboardAvoidingView} from 'react-native';
import { Container, Header, Item, Input, Button, Left, Right, Body, Content } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppFooter from './AppFooter';
import HomeScreenDrawer from './Home';


const SearchWindow = (props) => {
    const {navigation} = props;
    return (
            <Container>
                <Content>
                    <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.   statusBarHeight}}>
                    <Header hasTabs style={{backgroundColor:'white',elevation: 0}}>
                        <Left >
                            <Button transparent
                            onPress={()=>navigation.navigate("HomeStack")}>
                            <Ionicons name="ios-arrow-round-back" style={{fontSize: 30}} color='#00aced'/>
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
                </Content>
            <KeyboardAvoidingView
            behavior="padding"
            >

                            <AppFooter/>
            </KeyboardAvoidingView>
            </Container>
            );
};

SearchWindow.navigationOptions = {
title: "SearchWindow"
};

export default SearchWindow;
