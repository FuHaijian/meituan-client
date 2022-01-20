import React, { useEffect, useState, memo } from "react"
import { reqrecommend } from '@/api'
import * as myActions from './store/actionCreators'
import * as mainActions from '../Main/store/actionCreators'
import { connect } from "react-redux"
import Scroll from '@/baseUI/scroll'
import { forceCheck } from "react-lazyload"
import RecommendList from '@/components/recommendList/RecommendList'
import HeaderComponent from '@/components/my/headerComponent/HeaderComponent'
import UserBenefits from '@/components/my/userBenefits/UserBenefits'
import OrdersOprationButtom from '@/components/my/ordersOprationButtom/OrdersOprationButtom'
import Menubar from '@/components/my/menuBar/myMenuBar'

import './My.css'

const My = (props) => {
    // state 
    const { myPageData, totalAccount, selectedGoods } = props
    const { menuBarData, OrdersOprationButtomData } = myPageData 
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // action 
    const { 
        getMyPageDataDispatch,
        getSelectedGoodsDisPatch: setCartInfo,
        getTotalAccountDispatch: setTotalAccount,
        getTabbarIndexDiapatch: setIndex
    } = props
    const handlePullUp = async() => {
        if (!isLoading) {
            await setTimeout(() => {
                setIsLoading(true)
                setPage(++page)
            }, 1000)
        }
        setIsLoading(false)
    }
    const handlePullDown = () => {
    }
    const getRecommendListData = async() => {
        await reqrecommend(page)
        .then(res => {
            setList([...list, ...res.data.data.list])
        })
    }
    useEffect(() => {
        setIndex(3)
        if(!myPageData.length) {
            getMyPageDataDispatch()
        }
    }, [])
    useEffect(() => {
        getRecommendListData()
    }, [page])
    return (
        <div className="my__container">
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
                    <HeaderComponent />
                    <UserBenefits />
                    <div className="padding">
                        <OrdersOprationButtom ButtomData={OrdersOprationButtomData}/>
                        <Menubar  menuBarData={menuBarData}/>
                    </div>
                    <RecommendList 
                        recommendList={list} 
                        selectedGoods={selectedGoods}
                        totalAccount={totalAccount}
                        setCartInfo={setCartInfo}
                        setTotalAccount={setTotalAccount}
                    /> 
                </div>
            </Scroll>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        myPageData: state.my.myPageData,
        totalAccount: state.main.totalAccount,
        selectedGoods: state.main.selectedGoods
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMyPageDataDispatch() {
            dispatch(myActions.getMyPageData())
        },
        getSelectedGoodsDisPatch(GoodsList) {
            dispatch(mainActions.setSelectedGoods(GoodsList))
        },
        getTotalAccountDispatch(account) {
            dispatch(mainActions.setTotalAccount(account))
        },
        getTabbarIndexDiapatch(index) {
            dispatch(mainActions.setIndex(index))
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(memo(My))