import React, { useEffect, useState, memo } from "react"
import { reqrecommend } from '@/api'
import { connect } from "react-redux"
import Scroll from '@/baseUI/scroll'
import { forceCheck } from "react-lazyload"
import RecommendList from '@/components/recommendList/RecommendList'
import HeaderComponent from '@/components/my/headerComponent/HeaderComponent'

import './My.css'

const My = (props) => {
    let [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const handlePullUp = () => {
        setPage(++page)
    }
    const handlePullDown = () => {

    }
    const getRecommendListData = async() => {
        await reqrecommend()
        .then(res => {
            setList([...list, ...res.data.data.list])
        })
    }
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
                    <RecommendList recommendList={list}/>
                </div>
            </Scroll>
        </div>
    )
} 

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, {})(memo(My))