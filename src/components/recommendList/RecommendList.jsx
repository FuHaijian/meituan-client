import React from "react"
import RecommendListItem from './recommendListItem/RecommendListItem'

import './RecommendList.css'

const  RecommendList = (props) => {
    // state 
    const { recommendList=[] } = props
    return (
        <div className="recommend__container">
            <div className="recommend__container_title">
                --　爆款推荐　--
            </div>
            {
                recommendList.length?
                recommendList.map((item, index) => 
                    <RecommendListItem 
                        key={index} 
                        goodData={item}
                    />
                ):""
            }
        </div>
    )
}

export default RecommendList