import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import configureStore from "../store";
import { AppNavigator } from '../routers';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = configureStore(navReducer);

export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}