import React, { memo, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { connect } from "react-redux"
import * as mainActions from '../Main/store/actionCreators'
import Scroll from '@/baseUI/scroll'
import { reqrecommend, reqgoodsdetail } from '@/api'
import { forceCheck } from "react-lazyload"
import PromiseIcon from '@/assets/images/detail2.jpg'
import DetailIcon from '@/assets/images/detail1.jpg'
import NavBar from '@/components/Detail/navBar/NavBar'
import RecommendList from '@/components/recommendList/RecommendList'
import ImgList from '@/components/Detail/imgList/ImgList'
import GoodsInfo from '@/components/Detail/goodsInfo/GoodsInfo'

import './Detail.css'

const Detail = (props) => {
    // state 
    const { totalAccount, selectedGoods } = props
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [ID, setID] = useState(1)
    const [goodsData, setGoodsData] = useState({})
    const {
        imgList,

    } = goodsData
    let { pathname } = useLocation()
    let idParams = pathname.replace('/detail', '') || undefined
    const [navBarStyle, setNavBarStyle] = useState(false)
    // actions 
    const {
        getSelectedGoodsDispatch: setCartInfo,
        getTotalAccountDispatch: setTotalAccount
    } = props
    const history = useHistory()
    const handlePullUp = () => {
        setPage(++page)
    }
    const handlePullDown = () => {
    }
    const getRecommendList = async () => {
        await reqrecommend(page)
            .then(res => {
                setList([...list, ...res.data.data.list])
            })
    }
    const getGoodsDetail = async () => {
        await reqgoodsdetail(ID)
            .then(res => {
                // console.log(res.data.data, '+++');
                setGoodsData(res.data.data)
            })
    }
    useEffect(() => {
        if (idParams) {
            idParams = idParams.replace('/', '') || undefined
            setID(idParams)
        }
        getRecommendList()
    }, [page])
    useEffect(() => {
        getGoodsDetail()
    }, [ID])

    return (
        <div className="detail__container">
            <NavBar
                navBarStyle={navBarStyle}
                goBack={() => history.goBack()}
                goToSearch={() => history.push('/search')}
            />
            {
                idParams ?
                    <Scroll
                        direction="vertical"
                        refresh={false}
                        pullUp={handlePullUp}
                        pullDown={handlePullDown}
                        onScroll={
                            (e) => {
                                if (e.y < -30) {
                                    setNavBarStyle(true)
                                } else {
                                    setNavBarStyle(false)
                                }
                                forceCheck()
                            }
                        }
                    >
                        <div>
                            <ImgList ImgListData={imgList} />
                            <GoodsInfo goodsData={goodsData} />
                            <img className="detailImg" src={DetailIcon} />
                            <img className="promiseImg" src={PromiseIcon} />
                            <RecommendList
                                recommendList={list}
                                selectedGoods={selectedGoods}
                                totalAccount={totalAccount}
                                setCartInfo={setCartInfo}
                                setTotalAccount={setTotalAccount}
                            />
                        </div>
                    </Scroll> : <div style={{ fontWeight: 700, marginLeft: "35%", fontSize: "20px" }}>页面错误了...</div>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalAccount: state.main.totalAccount,
        selectedGoods: state.main.selectedGoods
    }
}

const mapDiapatchToProps = (dispatch) => {
    return {
        getSelectedGoodsDispatch(goodsList) {
            dispatch(mainActions.setSelectedGoods(goodsList))
        },
        getTotalAccountDispatch(account) {
            dispatch(mainActions.setTotalAccount(account))
        }
    }
}

export default connect(mapStateToProps, mapDiapatchToProps)(memo(Detail))