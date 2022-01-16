import React from "react";
import GoodsListItem from './goodsListItem/GoodsListItem.jsx'

import './GoodsList.css'

const GoodsList = (props) => {
    // state 
    const { GoodsListData = [], selectedGoods, totalAccount, compressedData } = props
    // action 
    const { 
        setTotalAccount, 
        setCartInfo, 
        goToDetail, 
        changeCompressedData 
    } = props
    return (
        <div className="goodsList__container">
            {
                GoodsListData
                    .map((item, index) => 
                    <GoodsListItem 
                        good={item}
                        key={index}
                        index={index}
                        changeCompressedData={changeCompressedData}
                        compressedData={compressedData}
                        selectedGoods={selectedGoods}
                        setCartInfo={setCartInfo}
                        totalAccount={totalAccount}
                        setTotalAccount={setTotalAccount}
                        goToDetail={goToDetail}
                    />)
            }
        </div>
    )
}

export default GoodsList