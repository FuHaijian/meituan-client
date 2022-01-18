import React, { memo, useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import Scroll from '@/baseUI/scroll'
import { forceCheck } from "react-lazyload"
import * as mainActionTypes from '../Main/store/actionCreators'
import NavBar from '@/components/shoppingCart/navBar/NavBar.jsx'
import RecommendList from '@/components/recommendList/RecommendList'
import SelectedGoodsList from '@/components/shoppingCart/selectedGoodsList/SelectedGoodsList'
import ShoppingCartTabbar from '@/components/shoppingCart/shoppingCartTabbar/ShoppingCartTabbar'

import './ShoppingCart.css'
import { reqrecommend } from "@/api"

const ShoppingCart = (props) => {
    // state 
    const { selectedGoods } = props
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    let [isChange, setIsChange] = useState(false)
    // action 
    const { 
        getIndexDispatch: setIndex,
        getSelectedGoodsDisPatch: setCartInfo
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
                        isChange_List={isChange}
                        setIsChange_List={setIsChange}
                        goToShopping={() => history.push('/home/main')}
                    />
                    {/* 商品推荐 */}
                    <RecommendList recommendList={list}/> 
                </div>
            </Scroll>
            <ShoppingCartTabbar/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGoods: state.main.selectedGoods
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getIndexDispatch(index) {
            dispatch(mainActionTypes.setIndex(index))
        },
        getSelectedGoodsDisPatch(GoodsList) {
            dispatch(mainActionTypes.setSelectedGoods(GoodsList))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(memo(ShoppingCart))