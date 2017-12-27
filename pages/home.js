import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {getShopInfo } from '../actions/category';

class Home extends Component {
    componentDidMount() {
        this.props.getShopInfo();
    }
    static navigationOptions = {
        headerTitle:'home'
    };
    render() {
        return (
            <View>
                <Text>111</Text>
            </View>
        );
    }
}
//
// export default connect(
//     state => ({
//         news: state.news
//     }),
//     dispatch => bindActionCreators(newsActions, dispatch)
// )(Home);
//


const mapStateToProps = ({category}) => ({
    category
});

const mapDispatchToProps = (dispatch) => {
    return {
        getShopInfo: bindActionCreators(getShopInfo, dispatch),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)