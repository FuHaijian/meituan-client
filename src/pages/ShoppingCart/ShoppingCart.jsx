import React, { memo, useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Scroll from '@/baseUI/scroll'
import * as cartActionTypes from './store/actionCreators'
import * as mainActionType from '../Main/store/actionCreators'
import NavBar from '@/components/shoppingCart/navBar/NavBar.jsx'
import RecommendedGoodsList from '@/components/recommendedGoodsList/RecommendedGoodsList'
import SelectedGoodsList from '@/components/shoppingCart/selectedGoodsList/SelectedGoodsList'

import './ShoppingCart.css'

const ShoppingCart = (props) => {
    // state 
    const { shoppingdata, selectedGoods } = props
    const [navBarFixed, setNavBarFixed] = useState(false)
    // action 
    const { getShoppingDataDispatch, getSelectedGoodsDisPatch: setCartInfo } = props
    const history = useHistory()
    // 上拉加载更多
    const handlePullUp = () => {
        // console.log('----');
    }
    // 下拉刷新
    const handlePullDown = () => {
        // console.log('+++++');
    }
    useEffect(() => {
        if (!shoppingdata.length) {
            getShoppingDataDispatch()
        }
    }, [])
    return (
        <div className="cart__container">
                <Scroll
                    direction="vertical"
                    refresh={false}
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    onScroll={(e) => {
                        if(e.y < -60) {
                            setNavBarFixed(true)
                        }else {
                            setNavBarFixed(false)
                        }
                    }}
                >
                    <div>
                    <NavBar />
                    <div className="cart__container-padding">
                        {/* 已选商品列表 */}
                        <SelectedGoodsList 
                            selectedGoodsData={selectedGoods} 
                            setCartInfo={setCartInfo}
                            goToShopping={() => history.push('/home/main')}
                        />
                        {/* 商品推荐 */}
                        <RecommendedGoodsList />
                        <div className="enpty"></div>
                        </div>
                    </div>
                </Scroll>
                <div style={navBarFixed?{display:""}:{display:"none"}}>
                    <NavBar navBarFixed={navBarFixed} />
                </div>
                
        </div>
    )
}

const mapStateToProps = (states) => {
    return {
        shoppingdata: states.shoppingcart.shoppingdata,
        selectedGoods: states.main.selectedGoods
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getShoppingDataDispatch() {
            dispatch(cartActionTypes.getShoppingData())
        },
        getSelectedGoodsDisPatch(GoodsList) {
            dispatch(mainActionType.setSelectedGoods(GoodsList))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(memo(ShoppingCart))