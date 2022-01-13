import React from "react"
import LazyLoad from "react-lazyload"
import loading from '@/assets/images/loading.gif'

import './recommendListItem.css'

const recommendListItem = (props) => {
    const { goodData } = props
    // console.log(goodData, '====');
    return (
        <div className="listItem__container">
            <div className="listItem__container__pic">
                <LazyLoad
                     height={140}
                     placeholder={
                         <img height="100%" width="100%" 
                         src={loading}/>}
                >
                    <img src={goodData.imgsrc} alt="" />
                </LazyLoad>
            </div>
            <div className="listItem__container__desc">
                <div className="listItem__container__desc_title">
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
                <div className="listItem__container__desc_buttom">
                    加入购物车
                </div>
            </div>
        </div>
    )
}

export default recommendListItem