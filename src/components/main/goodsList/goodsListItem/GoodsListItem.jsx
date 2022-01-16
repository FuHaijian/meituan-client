import React from "react";
import LazyLoad from "react-lazyload";
import { floatAdd, floatSub} from '@/api/utils.js'
import loading from '@/assets/images/loading.gif'

import './GoodsListItem.css'

const GoodsListItem = (props) => {
    const { 
        good={}, 
        index, 
        selectedGoods, 
        totalAccount,
        compressedData
    } = props
    const { 
        goToDetail, 
        changeCompressedData,
        setCartInfo, 
        setTotalAccount 
    } = props
    const compressed = {};
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            compressed[`${good.id}`] = 1
            // console.log(compressed, '_+_+_+_');
            // console.log(compressedData, '{}{}{}{');
            // console.log({...compressed, ...compressedData}, '_____');
            setTotalAccount(floatAdd(totalAccount, price))
        }
        changeCompressedData({...compressed, ...compressedData})
        setCartInfo([good, ...selectedGoods])
    }
    return (
        <div className={(index+1)%2 === 0?"right-card":"left-card"}>
            <LazyLoad
                height={100} 
                placeholder={
                    <img height="100%" width="100%" 
                    src={loading}/>}
            >
                <img src={good.imgsrc} onClick={() => goToDetail(good.id)} />
            </LazyLoad>
            <div className="card__description">
                <div className="description__title" onClick={() => goToDetail(good.id)}>
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
                    onClick={() => {changeShoppingCart(good, good.price)}}>
                    加入购物车
                </div>
            </div>
            
        </div>
    )
}

export default GoodsListItem