import React, { useEffect, useState } from 'react'
import Scroll from '@/baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import MenuBar from '@/components/main/menuBar/MenuBar'
import NarBar from '@/components/main/narBar/NarBar'
import GoodsList from '@/components/main/goodsList/GoodsList'
import SnapUpGoods from '@/components/main/snapUpGoods/SnapUpGoods'
import SpecialGoods from '@/components/main/specialGoods/SpecialGoods'

import { useHistory } from 'react-router-dom'
import * as api from '@/api'
import { forceCheck } from 'react-lazyload'

import './Main.css'

const Main = (props) => {
    // 状态
    const { mainData } = props
    const { menuBarData, specialGoodsData } = mainData
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [display, setDisplay] = useState(false)
    // actions 
    const { getMainDataDispatch } = props
    const history = useHistory()

    const fetchList = () => {
        api.reqlist(page)
            .then(res => {
                setList([...list, ...res.data.data.list])
            })
    }
    // 上拉加载更多
    const handlePullUp = () => {
        setPage(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
    }
    useEffect(() => {
        if (!mainData.length) {
            getMainDataDispatch()
        }
        fetchList()
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
                        if (e.y < -1142) {
                            setDisplay(true)
                        } else {
                            setDisplay(false)
                        }
                        forceCheck()
                    }
                }
            >
                <div>
                     {/* 头部 */}
                    <NarBar goToSearch={() => history.push('/search')} />
                    {/* 商品分类及活动入口 */}
                    <MenuBar menuBarData={menuBarData} />
                    <div className='main-padding'>
                        {/* 秒杀特价 */}
                        <SnapUpGoods />
                        {/* 特价商品 */}
                        <SpecialGoods SpecialGoodsData={specialGoodsData} />
                        {/* 商品列表 */}
                        <GoodsList GoodsListData={list} />
                    </div>
                </div>
            </Scroll>
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
            dispatch(actionTypes.getMainData())
        }
    }
}

export default connect(mapStateToProps, mapStateToDisPatch)(Main)