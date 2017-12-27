import { actionTypes } from '../../actions/category'

const category = (state = {
    shopInfo: {},
}, action) => {
    switch (action.type) {
        case actionTypes.SHOP_INFO:
            return Object.assign({}, state, {
                shopInfo: action.shopInfo
            });
        default:
            return state
    }
};

export default category;