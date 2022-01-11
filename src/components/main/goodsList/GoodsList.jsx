import React from "react";
import GoodsListItem from './goodsListItem/GoodsListItem.jsx'

import './GoodsList.css'

const GoodsList = (props) => {
    const { GoodsListData = [] } = props
    return (
        <div className="goodsList__container">
            {
                GoodsListData
                    .map((item, index) => <GoodsListItem good={item} key={index} index={index}/>)
            }
        </div>
    )
}

export default GoodsList