import axios from '../../utils/axios'

export const actionTypes = {
    SHOP_INFO: 'SHOP_INFO',
};

export const setShopInfo = (shopInfo) => dispatch => {
    return dispatch({
        type: actionTypes.SHOP_INFO,
        shopInfo
    })
};

export function getShopInfo(preload) {
    return (dispatch, getState) => {
        return axios.get('/fb/message/getFbMsgUserList' ,{
            params: preload || {}
        })
            .then((res) => {
                if (res.data.success && res.data.data) {
                    dispatch(setShopInfo(res.data.data));
                }else {
                }
            }).catch((error) => {

            });
    }
}
