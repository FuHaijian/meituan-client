import * as actionTypes from './constants'

const defaultState = {
    classifyPageData: {}
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CLASSIFY_PAGEDATA:
            return { ...state, classifyPageData: action.data }
        default:
            return state;
    }
}

export default reducer