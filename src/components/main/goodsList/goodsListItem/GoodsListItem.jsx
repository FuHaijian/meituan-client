import React from "react";
import LazyLoad from "react-lazyload";
import { floatAdd, floatSub} from '@/api/utils.js'

import './GoodsListItem.style'
import './GoodsListItem.css'

const GoodsListItem = (props) => {
    const { good={}, index, selectedGoods, totalAccount } = props
    const { setCartInfo, setTotalAccount } = props
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            setTotalAccount(floatAdd(totalAccount, price))
            setCartInfo([good, ...selectedGoods])
        }
    }
    return (
        <div className={(index+1)%2 === 0?"right-card":"left-card"}>
            <LazyLoad>
                <img src={good.imgsrc} />
            </LazyLoad>
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
                <div className="description__button" 
                    onClick={() => changeShoppingCart(good, good.price)}>
                    加入购物车
                </div>
            </div>
            
        </div>
    )
}

export default GoodsListItem