import * as actionTypes from './constants'
import { reqmypagedata } from '@/api'
import axios from 'axios';
// 引入解析token方法
import jwt_decode from 'jwt-decode'
// 引入设置token方法
import { setUserToken } from "@/api/utils"
// 引入type类型
import { GET_ERRORS ,SET_CURRENT_USER} from './constants'
import { userLogin } from '@/api'

export const changeMyData = (data) => {
    return {
        type: actionTypes.CHANGE_MYDATA,
        data: data
    }
}
 
// 登录信息
export const loginUser = (userData,history) => dispatch =>{
    userLogin(userData)
    .then(res =>{//对返回的token进行解构,并存储
        const { token } = res.data;
        localStorage.setItem('jwToken',token)
        //设置axios的headers token
        setUserToken(token)
        // 解析token
        const decoded = jwt_decode(token)
        // console.log(decoded)
        // 解析之后用dispatch分发
        dispatch(setCurrentUser(decoded))
    }).catch(err =>{
         // 在登录息错误的时候用dispatch把信息返回回去
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data
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