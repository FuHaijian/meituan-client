import React from "react";
import GoodsListItem from './goodsListItem/GoodsListItem.jsx'

import './GoodsList.css'

const GoodsList = (props) => {
    // state 
    const { GoodsListData = [], selectedGoods, totalAccount } = props
    // action 
    const { setTotalAccount, setCartInfo } = props
    return (
        <div className="goodsList__container">
            {
                GoodsListData
                    .map((item, index) => 
                    <GoodsListItem 
                        good={item}
                        key={index}
                        index={index}
                        selectedGoods={selectedGoods}
                        setCartInfo={setCartInfo}
                        totalAccount={totalAccount}
                        setTotalAccount={setTotalAccount}/>)
            }
        </div>
    )
}

export default GoodsList