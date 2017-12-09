
import React from "react";

import { Platform, Text } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Home from "./Home";
import Drawer from "./Drawer";
import AppHeader from "./AppHeader";
import Timeline from "./Timeline";
import Search from "./Search";
import AppFooter from "./AppFooter";


const AppNavigator = StackNavigator(
                                    {
                                    Home : {screen : Home},
                                    AppHeader : {screen : AppHeader},
                                    Timeline : {screen : Timeline},
                                    Search : {screen : Search},
                                    },
                                    {
                                    initialRouteName: "Home",
                                    headerMode: "none",
                                    }
                                    );

export default () =>
<Root>
<AppNavigator />
<AppFooter/>
</Root>;
