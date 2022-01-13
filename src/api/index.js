// 导入所有接口方法
import Axios from './axios'

export const reqmain = () => {
    return Axios('/home/main')
}

export const reqlist = (page) => {
    return Axios('/home/list', {page})
}

export const reqrecommend = () => {
    return Axios('/home/recommend')
}