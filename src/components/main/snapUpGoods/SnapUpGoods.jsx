import React from "react"
import TimeIcon from '@/assets/images/time.png'
import PriceTag from '@/common/priceTag/priceTag'

import './SnapUpGoods.css'

const SnapUpGoods = (props) => {
    const { SnapUpGoodsData={} } = props
    const goodsData = !SnapUpGoodsData.goods?[]:SnapUpGoodsData.goods;
    return (
        <div className="snapUpGoods-container">
            <div className="container__desc">
                <div className="container__desc-title">
                    {
                        SnapUpGoodsData.title
                    }
                </div>
                <div className="container__desc-time">
                    {
                        SnapUpGoodsData.time
                    }
                </div>
                <div className="container__desc-icon">
                    <img src={TimeIcon} />
                </div>
            </div>
            <div className="container__goodsList">
                {
                    goodsData.map(item => 
                        <div className="container__goodsList-item" key={item.id}>
                            <img src={item.imgsrc} />
                            <PriceTag price={item.price} bottom={0} left={10}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SnapUpGoods