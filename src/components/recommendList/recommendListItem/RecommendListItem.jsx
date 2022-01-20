import React, { memo } from "react"
import LazyLoad from "react-lazyload"
import { useHistory } from "react-router-dom"
import loading from '@/assets/images/loading.gif'
import { floatAdd, floatSub } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import { connect } from "react-redux"
import SubIcon from '@/assets/icon/sub.png'
import AddIcon from '@/assets/icon/add.png'

import './recommendListItem.css'

const RecommendListItem = (props) => {
    let {
        goodData = {},
        selectedGoods,
        totalAccount,
        totalNum
    } = props
    // action 
    const {
        setSelectedGoods,
        setTotalAccount,
        setTotalNum,
        setAllSelected
    } = props
    const history = useHistory()
    let index = selectedGoods.findIndex(item =>
        item.id == goodData.id
    )
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
            // 选中则改变总数 和 总金额
            if (selectedGoods[index].isSelected) {
                setTotalAccount(floatSub(totalAccount, -price))
                setTotalNum(totalNum - 1)
            }
            selectedGoods[index].num--
            // 判断是否为0,为零则删除商品 
            if (selectedGoods[index].num == 0) {
                selectedGoods.splice(index, 1)
            }
        }
        // 改变单个数量
        setSelectedGoods(selectedGoods)
        // 校验
        isSelectedAll()
    }
    // 全选矫正
    const isSelectedAll = () => {
        let flag = true
        selectedGoods.map(item => {
            if (!item.isSelected) {
                flag = false
            }
        })
        if (!flag) {
            setAllSelected(false)
        } else {
            setAllSelected(true)
        }
    }
    return (
        <div className="listItem__container">
            <div className="listItem__container__pic">
                <LazyLoad
                    height={140}
                    placeholder={
                        <img height="100%" width="100%"
                            src={loading} />}
                >
                    <img src={goodData.imgsrc} onClick={() => history.push(`/detail/${goodData.id}`)} />
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
                {
                    selectedGoods[index] ?
                        <div className="recommend__oprateNum">
                            <img src={SubIcon} className="recommend__subNum"
                                onClick={() => changeShoppingCart(goodData, -goodData.price)} />
                            <span className="recommend__goodsNum">{selectedGoods[index].num}</span>
                            <img src={AddIcon} className="recommend__addNum"
                                onClick={() => changeShoppingCart(goodData, goodData.price)} />
                        </div>
                        : <div
                            className="listItem__container__desc_buttom"
                            onClick={() => changeShoppingCart(goodData, goodData.price)}>
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
        totalNum: state.main.totalNum,
        allSelected: state.main.allSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedGoods(goodsList) {
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(RecommendListItem))