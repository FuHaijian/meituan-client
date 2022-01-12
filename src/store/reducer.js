import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store/index'
import { reducer as shoppingcartReducer } from '../pages/ShoppingCart/store/index'



export default combineReducers({
    main: mainReducer,
    shoppingcart: shoppingcartReducer
});