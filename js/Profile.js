import React from 'react';
import { Image, StyleSheet, Text, View ,WebView,Dimensions} from 'react-native';
import {Icon} from 'native-base';
import {Content} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {
    render() {
        
        return (
                
                <Content>
                <View style={styles.container}>
                    <Image style={{height:55, width:50  }}source={require("../images/Profile.png")} />
                    <Text style ={{fontSize: 18,fontWeight: 'bold'}}>Bhavya Sruthi Sode{'                 '}
                        <Entypo name='chevron-small-down' style={{fontSize: 25, fontWeight: 'bold',color: '#00aced'}}/></Text>
                    <Text style ={{fontSize: 15,color:'grey'}}>@BhavyaSode</Text>
                    <Text>{"\n"}</Text>
                    <Text>
                        <Text>
                            <Text style ={{fontSize: 16,fontWeight: 'bold'}}>120{' '}</Text>
                            <Text style ={{fontSize: 16,color:'grey'}}>Following </Text>
                        </Text>{'    '}
                        <Text>
                            <Text style ={{fontSize: 16,fontWeight: 'bold'}}>109</Text>{' '}
                            <Text style ={{fontSize: 16,color:'grey'  }}>Followers </Text>{' '}
                        </Text>
                    </Text>
                    <Text>{"\n"}</Text>
                    <View style = {styles.lineStyle}></View>
                    <Text>{"\n"}</Text>
                    <Text style ={{fontSize: 20}}>
                        <Ionicons name='ios-person-outline' style={{fontSize: 23}} />
                        {'   '}Profile{'\n\n'}
                    </Text>
                    <Text style ={{fontSize: 20}}>
                        <Ionicons name='ios-list-box-outline' style={{fontSize: 23}} />
                        {'   '}Lists{"\n\n"}
                    </Text>
                    <Text style ={{fontSize: 20}}>
                        <MaterialCommunityIcons name='flash-outline' style={{fontSize: 23}} />
                        {'  '}Moments{"\n\n"}
                        </Text>
                    <Text style ={{fontSize: 20}}>
                        <Ionicons name='ios-photos-outline' style={{fontSize: 23}} />
                        {'   '}Highlights{"\n\n"}
                    </Text>
                    <View style = {styles.lineStyle}></View>
                    <Text style ={{fontSize: 20}}> {'\n'}Settings and privacy {'\n'} </Text>
                    <Text style ={{fontSize: 20}}> Help Center </Text>
                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'flex-end'}}>
                        <View style = {styles.lineStyle}></View>
                        <Text>
                {'\n'}<FontAwesome name='moon-o' style={{fontSize: 25, color: '#00aced'}}/>                                                                  <FontAwesome name='qrcode' style={{fontSize: 25, color: '#00aced'}}/>
                        </Text>
                    </View>
                </View>
                </Content>
                
                );
    }
}

var { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
                                 container: {
                                 height : 700,
                                 flex: 1,
                                 padding:30,
                                 backgroundColor: '#fff',
                                 alignItems: 'flex-start',
                                 justifyContent: 'flex-start',
                                 },
                                 
                                 lineStyle:{
                                 borderWidth: 0.65,
                                 borderColor:'#F3F3F3',
                                 margin:1,
                                 width:width -20
                                 }

                                 });
