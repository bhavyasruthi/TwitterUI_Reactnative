import React from 'react';
import HomeHeader from './HomeHeader';
import AppHeader from './AppHeader';
import DrawerHeader from './DrawerHeader';
import SearchHeader from './SearchHeader';
import {StyleSheet,Platform, Text, TouchableNativeFeedback, View,ScrollView, Animated } from 'react-native';
import {  Content,Header,Left,Body,Icon, Image,Right,Button,Title} from 'native-base';



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
                
                
                <View>
                
                
                {header}
                
                
                
                <View style={styles.tabbar}>
                
                {routes && routes.map((route, index) => {
                                      const focused = index === navigation.state.index;
                                      const tintColor = focused ? activeTintColor : inactiveTintColor;                                      const tabKey = route.key;
                                      const indicatorStyle = indicatorStyle;
                                      return (
                                              
                                              <TouchableNativeFeedback
                                              key={route.key}
                                              onPress={()=>{jumpToIndex(index);  this.onButtonPress(tabKey)}}
                                              background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                                              
                                              <View style={styles.tab}>
                                              {renderIcon({
                                                          route,
                                                          index,
                                                          focused,
                                                          tintColor,
                                                          indicatorStyle,
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
                                 // icon:
                                 // {
                                 //   tintColor:'blue',
                                 //     width: 26,
                                 //     height: 26
                                 // }
                                 });

export default TabBarComponent;
