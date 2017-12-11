import React from "react";
import { Platform, Text } from "react-native";
import { Root,Header } from "native-base";
import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import Profile from "./Profile";
import AppHeader from "./AppHeader";
import Timeline from "./Timeline";
import Search from "./Search";
import SearchWindow from "./SearchWindow";
import Notifications from "./Notifications";
import Messages from "./Messages";
import TabBarComponent from './TabBarComponent';


const HomeTabNavigator = TabNavigator(
                                    {
                                      Timeline : {screen : Timeline},
                                      Search : {screen : Search},
                                      Notifications : {screen : Notifications},
                                      Messages : {screen : Messages},
                                    },
                                    {
                                      
                                      tabBarComponent: props => (
                                                                 
                                                                 <TabBarComponent {...props}
                                                                 
                                                                 />),
                                    tabBarPosition: "Top",
                                    swipeEnabled: false,
                                    tabBarOptions : {
                                      indicatorStyle: {
                                      backgroundColor: '#00aced',
                                      },
                                      style:{
                                      borderTopWidth: 0,
                                      elevation: 8,
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
                                         },
                                         {
                                         contentComponent: props => <Profile {...props} />,
                                         drawerWidth: 330,
                                         }
                                         );

const MyAppNavigator = StackNavigator({
                                      HomeStack: { screen: HomeScreenDrawer },
                                      SearchWindow :{ screen: SearchWindow },
                                      },
                                      {
                                      headerMode: "none",
                                      }
                                      );
export default MyAppNavigator;
