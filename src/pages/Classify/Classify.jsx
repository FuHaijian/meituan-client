import React, { memo, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import * as classifyActions from './store/actionCreators'
import * as mainActions from '../Main/store/actionCreators'
import { reqclassifygoodsdata } from '@/api'
import SearchBar from '@/components/classify/searchBar/SearchBar'
import MenuBar from'@/components/classify/menuBar/MenuBar'
import MiniClassify from '@/components/classify/miniClassify/MiniClassify'
import GoodsList from '@/components/classify/GoodsList/GoodsList'
import ShoppingCartComponent from '../../components/shoppingCartComponent/ShoppingCartComponent'

import './Classify.css'

const Classify = (props) => {
    // state 
    const { classifyPageData, totalAccount, selectedGoods } = props
    const { menuData, miniMenuData } = classifyPageData
    const [list, setList] = useState([])
    let [page, setPage] = useState(1)
    const [type, setType] = useState(1)
    const history = useHistory()
    // action
    const { 
        getClassifyPageDataDispatch, 
        getSelectedGoodsDataDispatch:setCartInfo, 
        getTotalAccountDispatch:setTotalAccount 
    } = props
    // 上拉加载更多数据
    const getMoreGoodsListData = async() => {
        await reqclassifygoodsdata(page, type).then(res => {
            setList([...list, ...res.data.data.list])
        })
    }
    // 更换分类
    const getNewGoodsListData = async() => {
        await reqclassifygoodsdata(page, type)
            .then(res => {
                setList([...res.data.data.list])
        })
    }
    // 页面初始化
    useEffect(() => {
        if(!classifyPageData.length) {
            getClassifyPageDataDispatch()
        }
    }, [])
    // 加载更多数据
    useEffect(() => {
        getMoreGoodsListData()
    }, [page])
    // 改变分类
    useEffect(() => {
        getNewGoodsListData()
    }, [type])
    return (
        <div className="classify__container">
            <SearchBar/>
            <div className="container__goodsClassify">
                <div className="container__goodsClassify-menu">
                    {/* 垂直式分类 */}
                    <MenuBar menuData={menuData} changeType={setType}/>
                </div>
                <div className="container__goodsClassify-goods">
                    {/* 横移式分类 */}
                    <MiniClassify miniMenuData={miniMenuData} changeType={setType} />
                    {/* 视频列表 */}
                    <GoodsList 
                        GoodsListData={list} 
                        getMore={setPage} 
                        page={page} 
                        totalAccount={totalAccount}
                        setCartInfo={setCartInfo} 
                        setTotalAccount={setTotalAccount}
                        selectedGoods={selectedGoods}
                    />
                </div>
            </div>
            <ShoppingCartComponent 
                totalAccount={totalAccount}
                selectedGoods={selectedGoods}
                goToCart={() => history.push('/home/shoppingcart')}
            />
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        classifyPageData: state.classify.classifyPageData, 
        totalAccount: state.main.totalAccount,
        selectedGoods: state.main.selectedGoods
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClassifyPageDataDispatch() {
            dispatch(classifyActions.getClassifyPageData())
        },
        getSelectedGoodsDataDispatch(goodsList) {
            dispatch(mainActions.setSelectedGoods(goodsList))
        },
        getTotalAccountDispatch(account) {
            dispatch(mainActions.setTotalAccount(account))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Classify))