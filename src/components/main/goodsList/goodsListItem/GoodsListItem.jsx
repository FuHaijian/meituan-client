import React from "react";

import './GoodsListItem.style'
import './GoodsListItem.css'

const GoodsListItem = (props) => {
    const { good={}, index } = props
    return (
        <div className={(index+1)%2 === 0?"right-card":"left-card"}>
            <img src={good.imgsrc} />
            <div className="card__description">
                <div className="description__title">
                    {
                        good.tags.map(item => <div key={index + Math.random()*1000} className="description__title-tags">{item}</div>)
                    }
                    {good.title}
                </div>
                <div className="description__tradeDescription">
                    {good.tradeDescription}
                </div>
                <div className="description__price">
                    {`￥${good.price}`}
                </div>
                <div className="description__button">
                    加入购物车
                </div>
            </div>
            
        </div>
    )
}

export default GoodsListItem