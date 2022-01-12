import * as actionType from './constants.js';
import { reqshoppingcart } from '@/api/index'

//主页数据
export const changeShoppingCartData = (data) => {
    return {
        type: actionType.CHANGE_GOODSDATA,
        data: data
    }
}

export const getShoppingData = () => {
    // api
    return (dispatch) => {
        reqshoppingcart()
            .then((res) => {
                dispatch(changeShoppingCartData(res.data.data))
            }).catch((err) => {
                console.log('出错了');
            });
    }
}