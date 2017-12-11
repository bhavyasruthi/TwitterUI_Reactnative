import React from 'react';
import { StyleSheet, Text, View,WebView ,Image,Linking, ScrollView, RefreshControl} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container} from 'native-base';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppFooter from './AppFooter';


export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        refreshing: false,
        };
    }
    
    //This method help you to change / refresh data in page when gesture pull down is used.
    //RefreshControl provided by react-native can be only embedded in ScrollView or ListView.
    _onRefresh() {
        this.setState({refreshing: true});
        fetchData().then(() => {
                         this.setState({refreshing: false});
                         });
    }
    
    static navigationOptions = {
        title : 'timeline',
        tabBarIcon: ({tintColor})=>{
        return <Icon name="home" color={tintColor}/>;
        
        }
    }
    render() {
        return (
                <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}} refreshControl={<RefreshControl refreshing={this.state.refreshing} title="Pull to refresh" colors={['#00aced']}/>}>
                <WebView source={{uri: 'https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw'}}  style={{height: 500}} />
                <ActionButton buttonColor='#00aced' icon={<MaterialCommunityIcons style={{color:'white',}} name='feather' size={25} padding={20} />}buttonText='+' >
                <ActionButton.Item buttonColor='#00aced' title="Tweet" onPress={() => console.log("new tweet tapped!")}>
                <Text>Add Tweet</Text>
                </ActionButton.Item>
                </ActionButton>
                </ScrollView>
                <AppFooter/>
                </View>
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
