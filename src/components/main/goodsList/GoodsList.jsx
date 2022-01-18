import React from "react";
import GoodsListItem from './goodsListItem/GoodsListItem.jsx'

import './GoodsList.css'

const GoodsList = (props) => {
    // state 
    const { GoodsListData = [] } = props
    // action 
    return (
        <div className="goodsList__container">
            {
                GoodsListData
                    .map((item, index) => 
                    <GoodsListItem 
                        good={item}
                        key={index}
                        i={index}
                    />)
            }
        </div>
    )
}

export default GoodsList