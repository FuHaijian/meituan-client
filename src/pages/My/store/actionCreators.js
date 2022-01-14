import * as actionTypes from './constants'
import { reqmypagedata } from '@/api'

export const changeMyData = (data) => {
    return {
        type: actionTypes.CHANGE_MYDATA,
        data: data
    }
}

export const getMyPageData = () => {
    return (dispatch) => {
        reqmypagedata()
            .then(res => {
                dispatch(changeMyData(res.data.data))
            })
            .catch(error => {
                console.log('出错了');
            })
    }
}