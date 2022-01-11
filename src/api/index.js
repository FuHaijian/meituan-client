// 导入所有接口方法
import Axios from './axios'

export const reqmain = () => {
    return Axios('/home/main')
}