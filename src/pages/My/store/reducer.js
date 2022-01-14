import * as actionTypes from './constants'
const defaultstate = {
    myPageData: {}
}

const reducer = (state = defaultstate, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_MYDATA:
            return {...state, myPageData: action.data}
        default:
            return state;
    }
}

export default reducer