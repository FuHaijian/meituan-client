import React, { useState, memo } from "react"
import LazyLoad from "react-lazyload"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { floatAdd, floatSub } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import loading from '@/assets/images/loading.gif'
import SubIcon from '@/assets/icon/sub.png'
import AddIcon from '@/assets/icon/add.png'
import TipPopup from '@/common/tipPopup/TipPopup'

import './GoodsListItem.css'

const GoodsListItem = (props) => {
    // state 
    let {
        good = {},
        i,
        selectedGoods,
        totalAccount,
        totalNum
    } = props
    // actions 
    const {
        goToDetail,
        setCartInfo,
        setTotalAccount,
        setTotalNum,
        setAllSelected
    } = props
    let index = selectedGoods.findIndex(item =>
        item.id == good.id
    )
    const history = useHistory()
    const changeShoppingCart = (good, price) => {
        if (price > 0) {
            // 改变总数 和 总金额
            if (index != -1) {
                selectedGoods[index].num++
                if (!selectedGoods[index].isSelected) {
                    selectedGoods[index].isSelected = true
                    setTotalAccount(floatAdd(totalAccount, price * selectedGoods[index].num))
                    setTotalNum(totalNum + selectedGoods[index].num)
                } else {
                    setTotalAccount(floatAdd(totalAccount, price))
                    setTotalNum(totalNum + 1)
                }
            } else {
                good["num"] = 1
                good["isSelected"] = true
                selectedGoods = [good, ...selectedGoods]
                setTotalAccount(floatAdd(totalAccount, price))
                setTotalNum(totalNum + 1)
            }
        } else {
            selectedGoods[index]["num"]--
            // 选中则改变总数 和 总金额
            if (selectedGoods[index].isSelected) {
                setTotalAccount(floatSub(totalAccount, -price))
                setTotalNum(totalNum - 1)
            }
            // 判断是否为0,为零则删除商品 
            if (selectedGoods[index]["num"] == 0) {
                selectedGoods.splice(index, 1)
            }

        }
        // 改变单个数量
        setCartInfo(selectedGoods)
        isSelectedAll()
    }
    const isSelectedAll = () => {
        let flag = true
        selectedGoods.map(item => {
            if (!item.isSelected)
                flag = false
        })
        if (!flag) {
            setAllSelected(false)
        } else {
            setAllSelected(true)
        }
    }
    return (
        <div className={(i + 1) % 2 === 0 ? "right-card" : "left-card"}>
            <LazyLoad
                height={100}
                placeholder={
                    <img height="100%" width="100%"
                        src={loading} />}
            >
                <img src={good.imgsrc} onClick={() => history.push(`/detail/${good.id}`)} />
            </LazyLoad>
            <div className="card__description">
                <div className="description__title" onClick={() => goToDetail(good.id)}>
                    {
                        good.tags.map(item => <div key={item} className="description__title-tags">{item}</div>)
                    }
                    {good.title}
                </div>
                <div className="description__tradeDescription">
                    {good.tradeDescription}
                </div>
                <div className="description__price">
                    {`￥${good.price}`}
                </div>
                {
                    selectedGoods[index]
                        ? <div className="oprateNum">
                            <img src={SubIcon} className="subNum" onClick={() => changeShoppingCart(good, -good.price)}></img>
                            <span className="goodsNum">{selectedGoods[index]["num"]}</span>
                            <img src={AddIcon} className="addNum" onClick={() => changeShoppingCart(good, good.price)}></img>
                        </div>
                        : <div className="description__button"
                            onClick={() => { changeShoppingCart(good, good.price) }}>
                            加入购物车
                        </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGoods: state.main.selectedGoods,
        totalAccount: state.main.totalAccount,
        totalNum: state.main.totalNum
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
        setAllSelected(boolean) {
            dispatch(mainActions.setAllSelected(boolean))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(GoodsListItem))