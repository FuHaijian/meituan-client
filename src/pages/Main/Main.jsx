import React, { useEffect, useState, memo } from 'react'
import Scroll from '@/baseUI/scroll'
import { connect } from 'react-redux'
import * as actions from './store/actionCreators'
import { useHistory } from 'react-router-dom'
import * as api from '@/api'
import { forceCheck } from 'react-lazyload'

import MenuBar from '@/components/main/menuBar/MenuBar'
import NavBar from '@/components/main/navBar/NavBar'
import GoodsList from '@/components/main/goodsList/GoodsList'
import SnapUpGoods from '@/components/main/snapUpGoods/SnapUpGoods'
import SpecialGoods from '@/components/main/specialGoods/SpecialGoods'
import MenuBar_Top from '@/components/main/menuBar/menuBar_Top/MenuBar_Top'
import ShoppingCartComponent from '@/components/shoppingCartComponent/ShoppingCartComponent'
import TipPopup from '../../common/tipPopup/TipPopup'

import './Main.css'

const Main = (props) => {
    // state
    const { mainData } = props
    const {
        menuBarData = { "list1": [], "list2": [], "list4": [] },
        specialGoodsData,
        SnapUpGoodsData,
        menuBar_TopData
    } = mainData
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [navBarFixed, setNavBarFixed] = useState(false)
    const [menuBarFixed, setMenuBarFixed] = useState(false)
    // actions 
    const { getMainDataDispatch } = props
    const history = useHistory()
    const fetchList = async () => {
        await api.reqlist(page)
            .then(res => {
                setList([...list, ...res.data.data.list])
            })
    }
    // 上拉加载更多
    const handlePullUp = async () => {
        if (!isLoading) {
            await setTimeout(() => {
                setIsLoading(true)
                setPage(++page)
            }, 1000)
        }
        setIsLoading(false)
    }
    // 下拉刷新
    const handlePullDown = () => {
    }
    useEffect(() => {
        if (!mainData.length) {
            getMainDataDispatch()
        }
    }, [])
    useEffect(() => {
        fetchList()
    }, [page])
    return (
        <div className='main'>
            <Scroll
                direction="vertical"
                refresh={false}
                pullUp={handlePullUp}
                pullDown={handlePullDown}
                onScroll={
                    (e) => {
                        if (e.y < -30) {
                            setNavBarFixed(true)
                        } else {
                            setNavBarFixed(false)
                        }
                        if (e.y < -100) {
                            setMenuBarFixed(true)
                        } else {
                            setMenuBarFixed(false)
                        }
                        forceCheck()
                    }
                }
            >
                <div>
                    {/* 头部 */}
                    <NavBar goToSearch={() => history.push('/search')} navBarFixed={navBarFixed} />
                    {/* 商品分类及活动入口 */}
                    <MenuBar menuBarData={menuBarData} />
                    <div className='main-padding'>
                        {/* 秒杀特价 */}
                        <SnapUpGoods SnapUpGoodsData={SnapUpGoodsData} />
                        {/* 特价商品 */}
                        <SpecialGoods SpecialGoodsData={specialGoodsData} />
                        {/* 商品列表 */}
                        <GoodsList GoodsListData={list} />
                    </div>
                </div>
            </Scroll>
            {/* 头部悬挂组件 */}
            <div style={navBarFixed ? { display: "" } : { display: "none" }}>
                <NavBar goToSearch={() => history.push('/search')} navBarFixed={navBarFixed} />
            </div>
            <div style={menuBarFixed ? { display: "" } : { display: "none" }}>
                <MenuBar_Top
                    menuBarData={menuBar_TopData}
                    menuBarFixed={menuBarFixed}
                />
            </div>
            {/* 购物车组件 */}
            <ShoppingCartComponent />
            {/* <TipPopup isDisplay={isLoading} /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mainData: state.main.maindata
    }
}
const mapStateToDisPatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actions.getMainData())
        }
    }
}

export default connect(mapStateToProps, mapStateToDisPatch)(memo(Main))