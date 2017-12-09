
import React from "react";

import { Platform, Text } from "react-native";
import { Root,Header } from "native-base";
import { TabBarTop, StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import Profile from "./Profile";
import Drawer from "./Drawer";
import AppHeader from "./AppHeader";
import Timeline from "./Timeline";
import Search from "./Search";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import TabBarComponent from './TabBarComponent';

const HomeTabNavigator = TabNavigator(
                                    {
                                    Timeline : {screen : Timeline, navigationOptions: { title: 'Timeline', header: { title: 'Timeline' } }},
                                    Search : {screen : Search, navigationOptions: { title: 'Search', header: (props)=><ImageHeader {...props} />, }},
                                      Tab3 : {screen : Tab3, navigationOptions: { title: 'Tab3', header: { title: 'Tab3' } }},
                                      Tab4 : {screen : Tab4, navigationOptions: { title: 'Tab4', header: { title: 'Tab4' } }},
                                    },
                                    {
                                      
                                      tabBarComponent: props => (
                                                                 
                                                                 <TabBarComponent{...props}
                                                                 
                                                                 />),
                                    tabBarPosition: "Top",
                                    swipeEnabled: false,
                                    tabBarOptions : {
                                      indicatorStyle: {
                                      backgroundColor: '#00aced',
                                      },
                                      style:{
                                      backgroundColor : 'white',
                                      },
                                    activeTintColor : '#00aced',
                                    activeBackgroundColor : 'white',
                                    inactiveTintColor : 'black',
                                    inactiveBackgroundColor : 'white',
                                    showLabel : false,
                                    showIcon : true,
                                    animationEnabled: true,
                                    tabBarIcon: {tintColor : '#00aced'},
                                    },
                                      
                                    }
                                    );


const HomeScreenDrawer = DrawerNavigator(
                                         {
                                         Home: { screen: HomeTabNavigator  },
                                         Profile: { screen: Profile},
                        
                                         },
                                         {
                                         contentComponent: props => <Profile {...props} />,
                                         drawerWidth: 330,
                                         
                                         }
                                         );

const MyAppNavigator = StackNavigator({
                                      Home: { screen: HomeTabNavigator },
                                      });
export default HomeScreenDrawer;
