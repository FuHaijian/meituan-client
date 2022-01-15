import React, { useState } from "react"
import Scroll from '@/baseUI/scroll'
import Lazyload, { forceCheck } from "react-lazyload"
import Loading from '@/assets/images/loading.gif'
import { floatAdd } from '@/api/utils'
import SubIcon from '@/assets/images/sub.png'
import AddIcon from '@/assets/images/add.png'

import './GoodsList.css'

const GoodsList = (props) => {
    // state 
    let { page, GoodsListData = [], totalAccount, selectedGoods } = props
    // action 
    const { setCartInfo, setTotalAccount, getMore } = props
    let [num, setNum] = useState(1)
    const changeShoppingCart = (good, price) => {
        if (price > 0) {
            setTotalAccount(floatAdd(totalAccount, price))
            setCartInfo([good, ...selectedGoods])
        }
    }
    // 上拉加载更多
    const handlePullUp = () => {
        getMore(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
    }
    return (
        <div className="goodsList">
            <Scroll
                direction="vertical"
                refresh={false}
                pullUp={handlePullUp}
                pullDown={handlePullDown}
                onScroll={
                    (e) => {
                        forceCheck()
                    }
                }
            >
                <div>
                    {
                        GoodsListData.map((item, index) =>
                            <div className="goodsItem" key={index}>
                                <Lazyload
                                    height={100}
                                    placeholder={
                                        <img height="100%" width="100%"
                                            src={Loading} />
                                    }
                                >
                                    <img src={item.imgsrc} className="goodsItem__pic"></img>
                                </Lazyload>
                                <div className="goodsItem__desc">
                                    <div className="goodsItem__desc-title">
                                        {
                                            item.tags.map(tag =>
                                                <span className="tag" key={tag}>
                                                    {tag}
                                                </span>
                                            )
                                        }
                                        {item.title}
                                    </div>
                                    <div className="goodsItem__desc-numOfPerson">
                                        附近已有{item.numOfPersonPurchased}人下单
                                    </div>
                                    <div className="goodsItem__desc-price">
                                        ￥{item.price}
                                    </div>
                                    {
                                        false ?
                                            <div className="selectedGoodsItem__goodsInfo_buttom">
                                                {/* <img src={SubIcon} className="subButtom" onClick={() => { setNum(--num) }} />
                                                <div className="goodsNum">{num}</div>
                                                <img src={AddIcon} className="addButtom" onClick={() => { setNum(++num) }} /> */}
                                            </div>
                                            : <div
                                                className="goodsItem__desc-buttom"
                                                onClick={() => changeShoppingCart(item, item.price)}
                                            >
                                                加入购物车
                                            </div>
                                    }

                                </div>
                            </div>
                        )
                    }
                </div>

            </Scroll>
        </div>
    )
}

export default GoodsList