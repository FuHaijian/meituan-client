import React, { memo, useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import Scroll from '@/baseUI/scroll'
import { reqrecommend, reqgoodsdetail } from '@/api'
import { forceCheck } from "react-lazyload"
import NavBar from '@/components/Detail/navBar/NavBar'
import RecommendList from '@/components/recommendList/RecommendList'
import ImgList from '@/components/Detail/imgList/ImgList'
import GoodsInfo from '@/components/Detail/goodsInfo/GoodsInfo'

import './Detail.css'

const Detail = (props) => {
    // state 
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [ID, setID] = useState(1)
    const [goodsData, setGoodsData] = useState({})
    const { imgList } = goodsData    
    const { pathname } = useLocation()
    let idParams = pathname.replace('/detail', '') || undefined
    const [navBarStyle, setNavBarStyle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    // actions 

    const history = useHistory()
    // 上拉加载更多
    const handlePullUp = async() => {
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
    const getRecommendList = async () => {
        await reqrecommend(page)
            .then(res => {
                setList([...list, ...res.data.data.list])
            })
    }
    const getGoodsDetail = async () => {
        await reqgoodsdetail(ID)
            .then(res => {
                setGoodsData(res.data.data)
            })
    }
    useEffect(() => {
        if (idParams) {
            idParams = idParams.replace('/', '') || undefined
            setID(idParams)
        }
        getRecommendList()
    }, [page, pathname])
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
                            <img className="detailImg" src='http://1.117.162.125:9090/images/detail/detail1.jpg' />
                            <img className="promiseImg" src="http://1.117.162.125:9090/images/detail/detail2.jpg" />
                            <RecommendList recommendList={list}/>
                        </div>
                    </Scroll> : <div style={{ fontWeight: 700, marginLeft: "35%", fontSize: "20px" }}>页面错误了...</div>
            }

        </div>
    )
}

export default memo(Detail)