import {
    StackNavigator,
} from "react-navigation";

import Home from '../pages/home';

const AppNavigator = StackNavigator({
    Home: {
        screen: Home,
    },
});

export {
    AppNavigator
};