import { combineReducers } from 'redux';
import { reducer as mainReducer } from '../pages/Main/store'
import { reducer as shoppingcartReducer } from '../pages/ShoppingCart/store'
import { reducer as myReducer } from '../pages/My/store'
import { reducer as classifyReducer } from '../pages/Classify/store'



export default combineReducers({
    main: mainReducer,
    shoppingcart: shoppingcartReducer,
    my: myReducer,
    classify: classifyReducer
});