import * as actionTypes from './constants';

const defaultstate = {
    maindata: [],
    index: 0, 
    selectedGoods: [],
    totalAccount: 0
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MAINDATA:
            return {...state, maindata: action.data }
        case actionTypes.SET_SELECTED_GOODS:
            return {...state, selectedGoods: action.data }
        case actionTypes.SET_INDEX:
            return {...state, index: action.data }
        case actionTypes.SET_TOTAL_ACCOUNT:
            return {...state, totalAccount: action.data }
        default:
            return state;
    }
}
export default reducer;