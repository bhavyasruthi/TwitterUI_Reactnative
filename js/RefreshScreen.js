import React from 'react';
import { ListView, RefreshControl} from 'react-native';
import {Icon} from 'react-native-elements';

class RefreshScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        refreshing: false,
        };
    }
    
    _onRefresh() {
        this.setState({refreshing: true});
        fetchData().then(() => {
                         this.setState({refreshing: false});
                         });
    }
    
    render() {
        return (
                <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing}/>}/>
                );
    }
}
export default RefreshScreen;
