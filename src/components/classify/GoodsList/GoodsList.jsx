import React, { useState } from "react"
import Scroll from '@/baseUI/scroll'
import Lazyload, { forceCheck } from "react-lazyload"
import Loading from '@/assets/images/loading.gif'
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { floatAdd, floatSub } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import SubIcon from '@/assets/icon/sub.png'
import AddIcon from '@/assets/icon/add.png'

import './GoodsList.css'

const GoodsList = (props) => {
    // state 
    let {
        page,
        GoodsListData = [],
        totalAccount,
        selectedGoods,
        totalNum,
        isSelected
    } = props
    // action 
    const {
        getMore,
        setTotalAccount,
        setTotalNum,
        setCartInfo,
        setIsSelected
    } = props
    const changeShoppingCart = (good, price) => {
        let index = selectedGoods.findIndex(item => item.id == good.id )
        if (price > 0) {
            isSelected[good.id] = isSelected[good.id] ? isSelected[good.id] : true
            // 改变总数 和 总金额
            setTotalAccount(floatAdd(totalAccount, price))
            setTotalNum(totalNum + 1)
            // 数组添加元素
            if (index != -1) {
                selectedGoods[index]["num"]++
            } else {
                good["num"] = 1
                selectedGoods = [good, ...selectedGoods]
            }
        } else {
            selectedGoods[index]["num"]--
            // 判断是否为0,为零则删除商品 
            if (selectedGoods[index]["num"] == 0) {
                delete isSelected[good.id]
                selectedGoods.splice(index, 1)
            }
            // 改变总数 和 总金额
            setTotalAccount(floatSub(totalAccount, -price))
            setTotalNum(totalNum - 1)
        }
        // 改变单个数量
        setIsSelected(isSelected)
        setCartInfo(selectedGoods)
    }
    // 上拉加载更多
    const handlePullUp = () => {
        getMore(++page)
    }
    // 下拉刷新
    const handlePullDown = () => {
    }
    const history = useHistory()
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
                                    <img src={item.imgsrc} className="goodsItem__pic"
                                        onClick={() => history.push(`/detail/${item.id}`)
                                        }></img>
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
                                        selectedGoods[selectedGoods.findIndex(i => i.id == item.id )] ?
                                            <div className="selectedGoodsItem__goodsInfo_buttom">
                                                <img src={SubIcon} className="subButtom" onClick={() => changeShoppingCart(item, -item.price)} />
                                                <div className="goodsNum">{selectedGoods[selectedGoods.findIndex(i => i.id == item.id )].num}</div>
                                                <img src={AddIcon} className="addButtom" onClick={() => changeShoppingCart(item, item.price)} />
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

const mapStateToProps = (state) => {
    return {
        selectedGoods: state.main.selectedGoods,
        totalAccount: state.main.totalAccount,
        totalNum: state.main.totalNum,
        isSelected: state.main.isSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCartInfo(goodsList) {
            dispatch(mainActions.setSelectedGoods(goodsList))
        },
        setTotalAccount(account) {
            dispatch(mainActions.setTotalAccount(account))
        },
        setTotalNum(num) {
            dispatch(mainActions.setTotalNum(num))
        },
        setIsSelected(data) {
            dispatch(mainActions.setIsSelected(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)