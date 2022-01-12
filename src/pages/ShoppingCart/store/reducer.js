import * as actionTypes from './constants';

const defaultstate = {
    shoppingdata: []
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GOODSDATA:
            return {...state, shoppingdata: action.data }
        default:
            return state;
    }
}
export default reducer;