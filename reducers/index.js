
import { combineReducers } from 'redux';

import category from './category';

export default function reducers(navReducer) {
    return combineReducers({
        category,
        nav: navReducer
    });
}


