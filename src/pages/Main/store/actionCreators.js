import * as actionType from './constants.js';
import { reqmain } from '@/api/index'

//主页数据
export const changeMainData = (data) => {
    return {
        type: actionType.CHANGE_MAINDATA,
        data
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
        data
    }
}

export const setCompressedData = (data) => {
    return {
        type: actionType.SET_COMPRESSED_DATA,
        data
    }
}

export const setIsSelected = (data) => {
    return {
        type: actionType.SET_ISSELECTED,
        data
    }
}

export const setSelectedGoods = (data) => {
    return {
        type: actionType.SET_SELECTED_GOODS,
        data
    }
}

export const setTotalAccount = (data) => {
    return {
        type: actionType.SET_TOTAL_ACCOUNT,
        data
    }
}

export const setTotalNum = (data) => {
    return {
        type: actionType.SET_TOTAL_NUM,
        data
    }
}