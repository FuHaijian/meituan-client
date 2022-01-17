import React, { memo, useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Scroll from '@/baseUI/scroll'
import * as mainActionTypes from '../Main/store/actionCreators'
import NavBar from '@/components/shoppingCart/navBar/NavBar.jsx'
import RecommendList from '@/components/recommendList/RecommendList'
import SelectedGoodsList from '@/components/shoppingCart/selectedGoodsList/SelectedGoodsList'
import { forceCheck } from "react-lazyload"

import './ShoppingCart.css'
import { reqrecommend } from "@/api"

const ShoppingCart = (props) => {
    // state 
    const { selectedGoods, totalAccount } = props
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    // action 
    const { 
        getIndexDispatch: setIndex,
        getSelectedGoodsDisPatch: setCartInfo,
        getTotalAccountDispatch: setTotalAccount
    } = props
    const history = useHistory()
    // 上拉加载更多
    const handlePullUp = () => {
        setPage(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
        // console.log('+++++');
    }
    const getRecommendListData = async() => {
        await reqrecommend(page)
            .then(res => {
                setList([...list, ...res.data.data.list])
            })
    }
    useEffect(() => {
        getRecommendListData()
    }, [page])
    useEffect(() => {
        setIndex(2)
    }, [])
    return (
        <div className="cart__container">
            <NavBar />
            <Scroll
                direction="vertical"
                refresh={false}
                pullUp={handlePullUp}
                pullDown={handlePullDown}
                onScroll={() => {
                    forceCheck()
                }}
            >
               <div> 
                    {/* 已选商品列表 */}
                    <SelectedGoodsList
                        selectedGoodsData={selectedGoods}
                        setCartInfo={setCartInfo}
                        goToShopping={() => history.push('/home/main')}
                    />
                    {/* 商品推荐 */}
                    <RecommendList recommendList={list}/> 
                </div>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGoods: state.main.selectedGoods,
        totalAccount: state.main.totalAccount
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getIndexDispatch(index) {
            dispatch(mainActionTypes.setIndex(index))
        },
        getSelectedGoodsDisPatch(GoodsList) {
            dispatch(mainActionTypes.setSelectedGoods(GoodsList))
        },
        getTotalAccountDispatch(account) {
            dispatch(mainActionTypes.setTotalAccount(account))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(memo(ShoppingCart))