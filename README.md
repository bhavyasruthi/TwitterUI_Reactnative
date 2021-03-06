# TwitterUI_Reactnative

TwitterUI_Reactnative project is a demonstration of building Twitter mobile app UI using Reactnative. It also helps you in best understanding of the basic features of reactnative. Please note that there is no backend integration in this project. Project uses Embedded Timelines feature and demonstartes UI of Twitter Android Mobile App. It mainly demonstrates -

<a href="https://imgflip.com/gif/20vee2"><img src="https://i.imgflip.com/20vee2.gif" title="made at imgflip.com"/></a>

## Screens

- Twitter timeline
- Twitter profile menu
- Twitter search box

## ReactNative Features (Mainly)

- StackNavigator, TabNavigator, DrawerNavigator : react-navigation
- Header,Footer : native-base
- TouchableNativeFeedback : react-native
- ActionButton : react-native-action-button
- RefreshControl : react-native
- KeyboardAvoidingView : react-native
- WebView nested in ScrollView, Dimensions, Platform : react-native
- Entypo,Feather,FontAwesome,Ionicons,MaterialCommunityIcons of react-native-vector-icons


You can find implementation of all these feautures in .js files and are documented.

## Twitter Embedded Timelines 

Twitter Embedded Timelines are introduced by Twitter to embed (live feed) timelines into our app. You can check details of this at https://dev.twitter.com/web/embedded-timelines

## Getting Started

Download this project to your local system. Open commandprompt and navigate to the project folder. Make sure you open Android emulator in your device. Use command "npm start" to run the project. After PackageManager is loaded select andriod emulator option to run app by pressing "a". You can now see app running in your emulator !!!

## Prerequisites

- Node - https://nodejs.org/en/
- npm (by default npm gets installed when node is installed) - https://www.npmjs.com/get-npm
- Reactnative(This project works best with Expo) - https://facebook.github.io/react-native/docs/getting-started.html
- Native-base - https://github.com/GeekyAnts/NativeBase
- react-native-vector-icons - https://github.com/oblador/react-native-vector-icons
- ActionButton - https://github.com/mastermoo/react-native-action-button

#### Example 
```
Install nvm and node
Install dependencies: npm install <Dependency> --save
Run Project : npm start
Output : Scan QR code by using Expo or press 'a' to run app on Android emulator
```
## Working flow of project
```
App.js -> js/AppMain.js -> Home.js -> TabNavigator(Timeline.js,Search.js,Notification.js,Messages.js)-> TabBarComponent.js -> AppHeader.js
                                   -> DrawerNavigator(Home.js with content Profile.js)                                   ->SearchHeader.js
                                   -> StackNavigator(Homestack,SearchWindow.js)
                                   
```

#### Developed as part of Hasura https://hasura.io/
## Author

Bhavya Sruthi Sode
