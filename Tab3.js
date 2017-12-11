import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {Icon} from 'react-native-elements';
import AppFooter from './AppFooter';
import {Container} from 'native-base';

export default class App extends React.Component {
    static navigationOptions = {
        title : 'tab3',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="notifications" color={tintColor}/>;
        
        }
    }
    render() {let JS = '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
        
        let source = JS + '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';
        

        return (
                <Container>
                <WebView
                source={{html: source}}
                javaScriptEnabled={true}
                />
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
