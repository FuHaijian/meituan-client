import * as actionTypes from './constants'
import { isEmpty } from '@/api/utils'

const defaultstate = {
    myPageData: {},
    user: {},
    isAuthenticated: false
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MYDATA:
            return { ...state, myPageData: action.data };
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: {...action.payload},//把action下的payload更新至user
                isAuthenticated: !isEmpty(action.payload),//确认授权,为防止payload是空值所以还在判断一下
            }
        default:
            return state;
    }
}

export default reducer