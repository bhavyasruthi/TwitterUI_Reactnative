import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Icon} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppFooter from './AppFooter';

export default class App extends React.Component {
    static navigationOptions = {
        title : 'tab4',
    tabBarIcon: ({tintColor})=>{
        return <Icon name="mail" color={tintColor} indicatorStyle={{backgroundColor:'#00aced'}}/>;
        
    }
    }
    render() {
        return (
                <View style={styles.container}>
                <Text>search</Text>
                <View
                style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                }}
                />
                <View>
                <Image style={styles.image} source={require('./Profile.png' )}/>
                </View>
                
                <ActionButton buttonColor='#00aced' icon={<MaterialCommunityIcons style={{color:'white'}} name='feather' size={25} padding={20} />}buttonText='+' >
                <ActionButton.Item buttonColor='#00aced' title="Tweet" onPress={() => console.log("new tweet tapped!")}>
                <Text>A</Text>
                </ActionButton.Item>
                </ActionButton>
                
                
                <Text>────────────────</Text>
                <View style = {styles.lineStyle}></View>
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
                                 lineStyle:{
                                 borderWidth: 0.5,
                                 borderColor:'black',
                                 margin:10,
                                 width:100
                                 },
                                 image: {
                                                                height: 100,
                                                                borderRadius: 50,
                                                                width: 100
                                                                },
                                 actionButtonIcon: {
                                 fontSize: 20,
                                 height: 22,
                                 color: 'white',
                                 },
                                 });
