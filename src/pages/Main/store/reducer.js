import * as actionTypes from './constants';

const defaultstate = {
    // 主页面数据
    maindata: [],
    // tabbar下标
    index: 0, 
    // 购物车商品
    selectedGoods: [],
    // 总金额
    totalAccount: 0,
    // 总数量
    totalNum: 0,
    // 已选中的商品
    isSelected: {}
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        case actionTypes.SET_SELECTED_GOODS:
            return {...state, selectedGoods: JSON.parse(JSON.stringify(action.data)) }
        case actionTypes.SET_INDEX:
            return {...state, index: action.data }
        case actionTypes.SET_TOTAL_ACCOUNT:
            return {...state, totalAccount: action.data }
        case actionTypes.SET_TOTAL_NUM:
            return {...state, totalNum: action.data }
        case actionTypes.SET_ISSELECTED:
            return {...state, isSelected: action.data }
        default:
            return state;
    }
}
export default reducer;