// 导入所有接口方法
// import Axios from './axios'
import Ajax from './axios'

export const reqmain = () => {
    return Ajax('/home/main')
}

export const reqlist = (page) => {
    return Ajax('/home/list', {page})
}

export const reqrecommend = (page) => {
    return Ajax('/home/recommend', {page})
}

export const reqmypagedata = () => {
    return Ajax('/home/my')
}

export const reqclassify = () => {
    return Ajax('/home/classify')
}

export const reqclassifygoodsdata = (page, type) => {
    return Ajax('/home/classify/goodsData', {page, type})
}
export const reqgoodsdetail = (id) => {
    return Ajax(`/detail/${id}`)
}

export const userLogin = (userData) => {
    return Ajax('home/user/login', {userData})
} 
