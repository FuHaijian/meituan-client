import React, { useState } from "react";
import PriceTag from "../../../common/priceTag/priceTag";
import SpecialGoodsItem from './specialGoodsItem/SpecialGoodsItem.jsx'

import './SpecialGoods.css'

const SpecialGoods = (props) => {
    const { SpecialGoodsData={}} = props
    return (
        <div className="SpecialGoods">
                <SpecialGoodsItem activity={SpecialGoodsData.activity1}/>
                <SpecialGoodsItem activity={SpecialGoodsData.activity2}/>
        </div>
    )
}

export default SpecialGoods