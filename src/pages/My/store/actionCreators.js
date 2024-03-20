import * as actionTypes from './constants'
import { reqmypagedata } from '@/api'
import axios from 'axios';
// 引入解析token方法
import jwt_decode from 'jwt-decode'
// 引入设置token方法
import { setUserToken } from "@/api/utils"
// 引入type类型
import { GET_ERRORS ,SET_CURRENT_USER} from './constants'
import { userLogin, userRegister } from '@/api'

export const changeMyData = (data) => {
    return {
        type: actionTypes.CHANGE_MYDATA,
        data: data
    }
}
 
// 登录信息
export const loginUser = (username, password) => dispatch =>{
    userLogin(username, password)
    .then(res => {//对返回的token进行解构,并存储
        const { token } = res.data.data;
        if (token) {
            localStorage.setItem('jwToken',token)
            setUserToken(token)
            const decoded = jwt_decode(token)
            // 解析之后用dispatch分发
            dispatch(setCurrentUser(decoded))
        } else {
            throw Error('账号密码或错误')
        }
    }).catch(error =>{
         dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    })
}
export const setCurrentUser = decoded =>{
    // 设置type,下一步return到reducers/authReducer.js中
    return{
        type:SET_CURRENT_USER,
        payload:decoded
    }
}

export const registerUser = async (username, password) => {
    const res = await userRegister(username, password);
    console.log(res, 'res');
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