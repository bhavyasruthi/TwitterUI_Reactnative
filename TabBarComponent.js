import React from 'react';
import AppHeader from './AppHeader';
import SearchHeader from './SearchHeader';
import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Button,Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabBarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        searchActive:false,
            
        };
        this.onButtonPress = this.onButtonPress.bind(this);
        
        
    };
    
    onButtonPress(tabKey) {
        if (tabKey=='Search') {
            this.setState({searchActive :true});
        } else {
            this.setState({searchActive :false});
        }
    }
    
    render () {
        
        let floatingIcon = <Ionicons name="ios-refresh-circle" style={{fontSize: 23}} />
        
        const {
            navigation,
            renderIcon,
            activeTintColor,
            inactiveTintColor,
            indicatorStyle,
            jumpToIndex
        } = this.props;
        console.log(this.props);
      const {routes} = navigation.state;
        console.log(routes);
        
        
        let header=null;
        if (!!this.state.searchActive) {
            header=<SearchHeader navigation={navigation}/>
        } else {
            header=<AppHeader navigation={navigation}/>;
        }
        
        
        return (
                
                
                <View style={{borderBottomWidth: 1,
                borderBottomColor: '#d9dbdd'}}>
                
                
                {header}
                
                
                
                <View style={styles.tabbar}>
                
                {routes && routes.map((route, index) => {
                                      const tabKey = route.key;
                                      const focused = index === navigation.state.index;
                                      const tintColor = focused ? activeTintColor : inactiveTintColor;
                                      const activeTabBottomColor = focused ? activeTintColor : '#d9dbdd';
                                      const activeTabBottomBorderWidth = focused ? 3 : 1;
                                      const indicatorStyle = indicatorStyle;
                                      return (
                                              
                                              <TouchableNativeFeedback
                                              key={route.key}
                                              onPress={()=>{jumpToIndex(index);  this.onButtonPress(tabKey)}}
                                              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                                              
                                              <View borderBottomColor={activeTabBottomColor} borderBottomWidth={activeTabBottomBorderWidth} style={styles.tab}>
                                              {renderIcon({
                                                          route,
                                                          index,
                                                          focused,
                                                          tintColor
                                                          })}
                                              </View>
                                              </TouchableNativeFeedback>
                                              );
                                      })}
                
                </View>
                </View>
                )
    }
    
    
    
};
const styles = StyleSheet.create({
                                 tabbar: {
                                 height: 45,
                                 flexDirection: 'row',
                                 backgroundColor: 'white',
                                 },
                                 tab: {
                                 alignSelf: 'stretch',
                                 flex: 1,
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 });

export default TabBarComponent;
