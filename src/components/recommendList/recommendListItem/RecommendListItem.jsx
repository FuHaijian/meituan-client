import React from "react"
import LazyLoad from "react-lazyload"
import { useHistory } from "react-router-dom"
import loading from '@/assets/images/loading.gif'
import { floatAdd } from '@/api/utils'

import './recommendListItem.css'


const recommendListItem = (props) => {
    const { selectedGoods=[], totalAccount } = props
    const { setCartInfo, setTotalAccount } = props
    const history = useHistory()
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            setTotalAccount(floatAdd(totalAccount, price))
            setCartInfo([good, ...selectedGoods])
        }
    }
    const { goodData } = props
    return (
        <div className="listItem__container">
            <div className="listItem__container__pic">
                <LazyLoad
                     height={140}
                     placeholder={
                         <img height="100%" width="100%" 
                         src={loading}/>}
                >
                    <img src={goodData.imgsrc} onClick={() => history.push(`/detail/${goodData.id}`)}/>
                </LazyLoad>
            </div>
            <div className="listItem__container__desc">
                <div className="listItem__container__desc_title" onClick={() => history.push(`/detail/${goodData.id}`)}>
                    {
                        goodData.tags.map(item => 
                            <div className="title-tags" key={item}>
                                {item}
                            </div>
                        )
                    }
                    {goodData.title}
                </div>
                <span className="listItem__container__desc_tradeDescription">
                        {goodData.tradeDescription}
                </span>
                <div className="listItem__container__desc_numOfPerson">
                    附近{goodData.numOfPersonPurchased}人已下单
                </div>
                <div className="listItem__container__desc_price">
                    ￥{goodData.price}
                </div>
                <div 
                    className="listItem__container__desc_buttom" 
                    onClick={() => changeShoppingCart(goodData, goodData.price)}>
                    加入购物车
                </div>
            </div>
        </div>
    )
}

export default recommendListItem