import React, { memo, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
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
    const { classifyPageData, totalAccount, selectedGoods, tabberIndex } = props
    const { menuData, miniMenuData } = classifyPageData
    const [list, setList] = useState([])
    let [page, setPage] = useState(1)
    const [type, setType] = useState(1)
    const history = useHistory()
    let { pathname } = useLocation()
    let typeParams = pathname.replace('/home/classify', '') || undefined
    // action
    const { 
        getClassifyPageDataDispatch, 
        getSelectedGoodsDataDispatch:setCartInfo, 
        getTotalAccountDispatch:setTotalAccount,
        getTabbarIndexDispatch:setIndex
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
    const gotoShoppingCart = () => {
        history.push('/home/shoppingcart')
    }
    // 页面初始化
    useEffect(() => {
        setIndex(1)
        if(!classifyPageData.length) {
            getClassifyPageDataDispatch()
        }
        if(typeParams) {
            typeParams = typeParams.replace('/', '') || undefined
            setType(typeParams)
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
                    <MenuBar menuData={menuData} changeType={setType} type={type}/>
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
                goToCart={() => gotoShoppingCart()}
            />
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        classifyPageData: state.classify.classifyPageData, 
        totalAccount: state.main.totalAccount,
        selectedGoods: state.main.selectedGoods,
        tabberIndex: state.main.index 
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
        },
        getTabbarIndexDispatch(index) {
            dispatch(mainActions.setIndex(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Classify))