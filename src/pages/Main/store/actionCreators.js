import * as actionType from './constants.js';
import { reqmain } from '../../../api/index'

//主页数据
export const changeMainData = (data) => {
    return {
        type: actionType.CHANGE_MAINDATA,
        data: data
    }
}

export const getMainData = () => {
    // api
    return (dispatch) => {
        reqmain()
            .then((res) => {
                // dispatch 同步action
                dispatch(changeMainData(res.data.data))
            }).catch((err) => {
                console.log('出错了');
            });
    }
}

export const setIndex = (data) => {
    return {
        type: actionType.SET_INDEX,
        data: data
    }
}

export const setSelectedGoods = (data) => {
    return {
        type: actionType.SET_SELECTEDGOODS,
        data: data
    }
}

export const setTotalAccount = (data) => {
    return {
        type: actionType.SET_TOTALACCOUNT,
        data: data
    }
}