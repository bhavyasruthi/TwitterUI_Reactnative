import React from 'react';
import { Text,TextInput, View, StyleSheet, Platform, Image } from 'react-native';
import { Container,Title,Content, Left,Right,Body, Header,Item,Icon,Input,Button} from 'native-base';
const SearchHeader = (props) => {
    const {navigation} =props;
    return (
            <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
            <Header searchBar rounded style={{backgroundColor:'white',elevation: 0}}>
            <Left >
            <Button transparent
            onPress={()=>{navigation.navigate("DrawerOpen")}}>
            <Image style={styles.image} source={require('../images/ProfilePic.png' )}/>
            </Button>
            </Left>
            <Body>
            <Item rounded style={{width:250,backgroundColor:'#F1F2F3'}}>
            <Icon name="search" />
            <Input placeholder="Search Twitter" onFocus={()=>navigation.navigate("SearchWindow")}/>
            </Item>
            </Body>
            <Right>
            <Icon name='md-person-add'/>
            </Right>
            </Header>
            </View>
            );
};

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 backgroundColor: '#fff',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 },
                                 image: {
                                 height: 35,
                                 borderRadius: 50,
                                 width: 40
                                 },
                                 });

export default SearchHeader;
