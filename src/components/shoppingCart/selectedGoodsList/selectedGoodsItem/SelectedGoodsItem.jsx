import React, { useState } from "react"
import { connect } from "react-redux"
import { floatAdd, floatSub} from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import AddIcon from '@/assets/icon/add.png'
import SubIcon from '@/assets/icon/sub.png'
import SelectedIcon from '@/assets/icon/selected.png'

import './SelectedGoodsItem.css'

const SelectedGoodsItem = (props) => {
    const [isChange,setIsChange] = useState(false)
    let { 
        goodData={},
        selectedGoods,
        totalNum,
        totalAccount,
        isSelected,
        isChange_List
    } = props
    const {
        setTotalNum,
        setTotalAccount,
        setCartInfo,
        setIsSelected,
        setIsChange_List
    } = props
    var index = selectedGoods.findIndex(item => item.id == goodData.id)
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            isSelected[good.id] = isSelected[good.id]?isSelected[good.id]:true
             // 改变总数 和 总金额
            setTotalAccount(floatAdd(totalAccount, price))
            setTotalNum(totalNum + 1)
            // 数组添加元素
            if(index != -1) {
                selectedGoods[index]["num"]++
            } else {
                good["num"] = 1
                selectedGoods = [good, ...selectedGoods]
            }
        } else {
            -- selectedGoods[index].num 
            // 判断是否为0,为零则删除商品 
            if(selectedGoods[index].num == 0) {
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
        setIsChange_List(!isChange_List)
    }
    const changeIsSelected = (id) => {
        isSelected[id] = !isSelected[id]
        setIsSelected(isSelected)
        setIsChange(!isChange)
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
                     <div className="goodsNum">{goodData.num}</div>
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
        totalNum: state.main.totalNum,
        isSelected: state.main.isSelected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
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