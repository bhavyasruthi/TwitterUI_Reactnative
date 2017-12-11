import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import { Container, Header, Item, Input, Button } from 'native-base';
import {Icon} from 'react-native-elements';
import AppFooter from './AppFooter';

export default class Search extends React.Component {
    static navigationOptions = {
        title : 'search',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="search" color={tintColor}/>;
        
    }
    }
    render() {
        let JS="twttr.widgets.createTimeline({sourceType: 'profile',screenName: 'twitterdev'},document.getElementById('container'),{chrome: 'noheader',borderColor:'#a80000'});";
        let source= 'https://twitter.com/TwitterDev';
        return (
                <Container>
                <WebView source={{uri:source}} javaScriptEnabled={true} injectedJavaScript={JS}/>
                <AppFooter/>
                </Container>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 
                                 });
