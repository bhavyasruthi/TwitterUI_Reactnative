//Importing basic components
import React from "react";
import { Platform, Text } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

//Importing local files 
import Home from "./Home";

const AppNavigator = StackNavigator(
                                    {
                                    Home : {screen : Home},
                                    },
                                    {
                                    initialRouteName: "Home",
                                    headerMode: "none",
                                    }
                                    );



export default () =>
<Root>
<Home/>
</Root>;
