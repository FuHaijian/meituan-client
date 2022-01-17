import React, { useState } from "react"
import { connect } from "react-redux"
import { floatAdd, floatSub, uniq, arrDelete } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import AddIcon from '@/assets/icon/add.png'
import SubIcon from '@/assets/icon/sub.png'
import SelectedIcon from '@/assets/icon/selected.png'

import './SelectedGoodsItem.css'

const SelectedGoodsItem = (props) => {
    let { 
        goodData={},
        compressedData,
        selectedGoods,
        totalNum,
        totalAccount,
        isSelected
    } = props
    const {
        setTotalNum,
        setTotalAccount,
        setCartInfo,
        setCompressedData,
        setIsSelected
    } = props
    console.log(isSelected, '----');
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            compressedData[good.id] = compressedData[good.id] > 0?compressedData[good.id] + 1 : 1
             // 改变总数 和 总金额
            setTotalAccount(floatAdd(totalAccount, price))
            setTotalNum(totalNum + 1)
            // 数组添加元素并去重
            selectedGoods = uniq([good, ...selectedGoods])
        } else {
            compressedData[good.id] = compressedData[good.id] > 0?compressedData[good.id] - 1 : 1
            // 判断是否为0,为零则删除商品 
            if(compressedData[good.id] == 0) {
                delete compressedData[good.id]
                selectedGoods = arrDelete(good, selectedGoods)
            }
            // 改变总数 和 总金额
            setTotalAccount(floatSub(totalAccount, -price))
            setTotalNum(totalNum - 1)
        }
        // 改变单个数量
        setCompressedData(compressedData)
        setCartInfo(selectedGoods)
    }
    const changeIsSelected = (id) => {
        console.log(isSelected[id], '++++');
        isSelected[id] = !isSelected[id]
       setIsSelected(isSelected)
    }
    return (
        <div className="selectedGoodsItem">
            <div className="selectedGoodsItem__selectButton">
                {
                    isSelected[goodData.id]
                    ? <div className="isSelected" onClick={() => changeIsSelected(goodData.id)}>
                        <img src={SelectedIcon} />
                    </div>
                    : 
                    <div className="isSelected" onClick={() => changeIsSelected(goodData.id)}>
                        <div className="noSeleted"></div>
                    </div>
                }
            </div>
            <div className="selectedGoodsItem__img">
                <img src={goodData.imgsrc} />
            </div>
            <div className="selectedGoodsItem__goodsInfo">
                <div className="selectedGoodsItem__goodsInfo_title">
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
                        onClick={() => changeShoppingCart(goodData, -goodData.price)}/>
                     <div className="goodsNum">{compressedData[goodData.id]}</div>
                    <img src={AddIcon} className="addButtom" 
                        onClick={() => changeShoppingCart(goodData, goodData.price)}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedGoods: state.main.selectedGoods,
        totalAccount: state.main.totalAccount,
        compressedData: state.main.compressedData,
        totalNum: state.main.totalNum,
        isSelected: state.main.isSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCompressedData(data) {
            dispatch(mainActions.setCompressedData(data))
        },
        setIsSelected(data) {
            dispatch(mainActions.setIsSelected(data))
        },
        setCartInfo(goodsList) {
            dispatch(mainActions.setSelectedGoods(goodsList))
        }, 
        setTotalAccount(account) {
            dispatch(mainActions.setTotalAccount(account))
        },
        setTotalNum(num) {
            dispatch(mainActions.setTotalNum(num))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedGoodsItem)