import React from "react"
import RecommendListItem from './recommendListItem/RecommendListItem.jsx'

import './RecommendList.css'

const  RecommendList = (props) => {
    const { recommendList=[] } = props
    return (
        <div className="recommend__container">
            <div className="recommend__container_title">
                --　爆款推荐　--
            </div>
            {
                recommendList.map((item, index) => 
                    <RecommendListItem key={index} goodData={item}/>
                )
            }
        </div>
    )
}

export default RecommendList