import React, { useState } from "react";
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