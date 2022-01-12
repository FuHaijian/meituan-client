import React from "react";
import Icon from '@/assets/images/activity.png'
import PriceTag from "@/common/priceTag/priceTag";

import './SpecialGoodsItem.css'

const SpecialGoodsItem = (props) => {
    const { activity = {} } = props
    const { goods = [] } = activity
    return (
        <div className="activity__container">
            <div className="activity__header">
                {activity.title}
                <div className="icon-desc">
                    <img src={Icon} />
                    <div className="desc">{activity.icon_desc}</div>
                </div>
            </div>
            <div className="activity__goods">
                {
                    goods.map(item  =>
                        <div className="activity__goods__item" key={item.id}>
                            <img className="item__img" src={item.imgsrc} alt="" />
                            <PriceTag price={item.price} bottom={-8} left={15}/>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

export default SpecialGoodsItem