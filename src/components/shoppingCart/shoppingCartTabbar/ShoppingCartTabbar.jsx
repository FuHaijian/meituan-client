import React, { useState, memo, useEffect } from "react"
import styled from "styled-components"
import SelectedIcon from '@/assets/icon/selected.png'
import { connect } from "react-redux"
import * as mainActions from '@/pages/Main/store/actionCreators'

const Bar = styled.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 50px;
    background-color: #fff;
    display: flex;
    padding: 0 10px;
`
const SelectedButtom = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .allSelected_FALSE {
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border:2px solid #c9c9c9 ;
        display: inline-block;
        margin-right: 5px;
        box-sizing: border-box;
    }
    .desc {
        font-size: 12px;
    }
    img {
        width: 22px;
        height: 22px;
        margin-right: 5px;
    }
`
const TotalAccount = styled.div`
    flex: 1;
    line-height: 50px;
    text-align: right;
    font-weight: 700;
    .totalNum {
        padding-right: 10px;
        color:#fd0020;
        font-size: 16px;
        
    }
`
const PayButtom = styled.div`
    width: 120px;
    line-height: 36px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    margin: 7px 0;
    border-radius: 30px;
    margin-right: 20px;
`

const ShoppingCartTabbar = (props) => {
    let { totalNum = 0, totalAccount = 0, selectedGoods, allSelected } = props
    const { setSelectedGoods, setTotalAccount, setTotalNum, setAllSelected } = props
    // 改变全选
    const changeSelected = () => {
        isSelectedAll()
        // 改变状态不同的商品
        selectedGoods = selectedGoods.map(item => {
            if (allSelected) {
                if (item.isSelected) {
                    totalNum -= item.num
                    totalAccount -= item.num * item.price
                }

            } else {
                if (!item.isSelected) {
                    totalNum += item.num
                    totalAccount += item.num * item.price
                }
            }
            item.isSelected = !allSelected
            return item
        })
        // 全选取反
        setAllSelected(!allSelected)
        // 数据修改
        setTotalNum(totalNum)
        setTotalAccount(totalAccount)
        setSelectedGoods(selectedGoods)
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
        <Bar>
            <SelectedButtom>
                {
                    selectedGoods.length == 0 ?
                        <div className="allSelected_FALSE"></div>
                        : allSelected
                            ? <img src={SelectedIcon} className="allSelected_TRUE" onClick={() => changeSelected()}></img>
                            : <div className="allSelected_FALSE" onClick={() => changeSelected()}></div>
                }
                <span className="desc">
                    全选
                </span>
            </SelectedButtom>
            <TotalAccount>
                <span className="title">合计：</span>
                <span className="totalNum">￥{
                    totalAccount ? totalAccount.toFixed(2) : 0
                }</span>
            </TotalAccount>
            <PayButtom style={totalNum == 0 ? { backgroundColor: "#faeb7d" } : { backgroundColor: "#ffd105" }}>
                去支付
                {
                    totalNum != 0 ? `(${totalNum})` : ""
                }
            </PayButtom>
        </Bar>
    )
}

const mapStateToProps = (state) => {
    return {
        totalNum: state.main.totalNum,
        totalAccount: state.main.totalAccount,
        selectedGoods: state.main.selectedGoods,
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
        setAllSelected(data) {
            dispatch(mainActions.setAllSelected(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShoppingCartTabbar))