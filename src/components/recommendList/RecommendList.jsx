import React from "react"
import RecommendListItem from './recommendListItem/RecommendListItem.jsx'

import './RecommendList.css'

const  RecommendList = (props) => {
    // state 
    const { recommendList=[], selectedGoods, totalAccount } = props
    // action 
    const { setCartInfo, setTotalAccount } = props
    return (
        <div className="recommend__container">
            <div className="recommend__container_title">
                --　爆款推荐　--
            </div>
            {
                recommendList.map((item, index) => 
                    <RecommendListItem 
                        key={index} 
                        goodData={item}
                        selectedGoods={selectedGoods}
                        totalAccount={totalAccount}
                        setCartInfo={setCartInfo}
                        setTotalAccount={setTotalAccount}
                    />
                )
            }
        </div>
    )
}

export default RecommendList