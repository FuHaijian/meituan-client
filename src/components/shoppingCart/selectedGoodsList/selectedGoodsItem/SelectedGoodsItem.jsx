import React, { useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { floatAdd, floatSub } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import AddIcon from '@/assets/icon/add.png'
import SubIcon from '@/assets/icon/sub.png'
import SelectedIcon from '@/assets/icon/selected.png'

import './SelectedGoodsItem.css'

const SelectedGoodsItem = (props) => {
    let {
        goodData = {},
        selectedGoods,
        totalNum,
        totalAccount
    } = props
    const {
        setTotalNum,
        setTotalAccount,
        setSelectedGoods,
        setAllSelected
    } = props
    const history = useHistory()
    // 确定商品下标
    let index = selectedGoods.findIndex(item => item.id == goodData.id)
    // 单个商品数量加减
    const changeShoppingCart = (price) => {
        isSelectedAll()
        if (price > 0) {
            // 数量增加
            selectedGoods[index].num++
            // 如未选中则变选中 改变总数 和 总金额
            if (!selectedGoods[index].isSelected) {
                selectedGoods[index].isSelected = true
                setTotalAccount(totalAccount + price * selectedGoods[index].num)
                setTotalNum(totalNum + selectedGoods[index].num)
            } else {
                setTotalAccount(floatAdd(totalAccount, price))
                setTotalNum(totalNum + 1)
            }
        } else {
            --selectedGoods[index].num
            // 选中则改变总数 和 总金额
            if (selectedGoods[index].isSelected) {
                setTotalAccount(floatSub(totalAccount, -price))
                setTotalNum(totalNum - 1)
            }
            // 判断是否为0,为零则删除商品 
            if (selectedGoods[index].num == 0) {
                selectedGoods.splice(index, 1)
            }

        }
        // 改变单个数量
        setSelectedGoods(selectedGoods)
    }
    // 全选矫正
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
    // 单个商品选择
    const changeIsSelected = () => {
        selectedGoods[index].isSelected = !selectedGoods[index].isSelected
        if (selectedGoods[index].isSelected) {
            totalNum += selectedGoods[index].num
            totalAccount += selectedGoods[index].num * selectedGoods[index].price
        } else {
            totalNum -= selectedGoods[index].num
            totalAccount -= selectedGoods[index].num * selectedGoods[index].price
        }
        setTotalAccount(totalAccount)
        setTotalNum(totalNum)
        setSelectedGoods(selectedGoods)
        isSelectedAll()
    }
    return (
        <div className="selectedGoodsItem">
            <div className="selectedGoodsItem__selectButton">
                {
                    selectedGoods[index].isSelected
                        ? <div className="isSelected" onClick={() => changeIsSelected()}>
                            <img src={SelectedIcon} />
                        </div>
                        :
                        <div className="isSelected" onClick={() => changeIsSelected()}>
                            <div className="noSeleted"></div>
                        </div>
                }
            </div>
            <div className="selectedGoodsItem__img" onClick={() => history.push(`/detail/${goodData.id}`)}>
                <img src={goodData.imgsrc} />
            </div>
            <div className="selectedGoodsItem__goodsInfo">
                <div className="selectedGoodsItem__goodsInfo_title" onClick={() => history.push(`/detail/${goodData.id}`)}>
                    {
                        goodData.tags.map(tag =>
                            <div className="tag" key={tag}>{tag}</div>
                        )
                    }
                    {goodData.title}
                </div>
                <div className="selectedGoodsItem__goodsInfo_trade">
                    {goodData.tradeDescription}
                </div>
                <div className="selectedGoodsItem__goodsInfo_price">
                    ￥{goodData.price}
                </div>
                <div className="selectedGoodsItem__goodsInfo_buttom">
                    <img src={SubIcon} className="subButtom"
                        onClick={() => changeShoppingCart(-goodData.price)} />
                    <div className="goodsNum">{goodData.num}</div>
                    <img src={AddIcon} className="addButtom"
                        onClick={() => changeShoppingCart(goodData.price)} />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGoodsItem)