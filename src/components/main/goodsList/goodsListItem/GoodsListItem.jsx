import React, { useState } from "react"
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
    let { 
        good={}, 
        i, 
        selectedGoods, 
        totalAccount,
        totalNum,
        isSelected
    } = props
    const { 
        goToDetail, 
        setIsSelected,
        setCartInfo, 
        setTotalAccount,
        setTotalNum
    } = props
    // const [isDisplay, setIsDisplay] = useState(false)
    var index = selectedGoods.findIndex(item => 
        item.id == good.id
    )
    const history = useHistory()
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
            selectedGoods[index]["num"] --
            // 判断是否为0,为零则删除商品 
            if(selectedGoods[index]["num"] == 0) {
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
        // setIsDisplay(true)
    }
    return (
        <div className={(i+1)%2 === 0?"right-card":"left-card"}>
            <LazyLoad
                height={100} 
                placeholder={
                    <img height="100%" width="100%" 
                    src={loading}/>}
            >
                <img src={good.imgsrc} onClick={() => history.push(`/detail/${good.id}`)} />
            </LazyLoad>
            <div className="card__description">
                <div className="description__title" onClick={() => goToDetail(good.id)}>
                    {
                        good.tags.map(item => <div key={index + Math.random()*1000} className="description__title-tags">{item}</div>)
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
                        onClick={() => {changeShoppingCart(good, good.price)}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(GoodsListItem)