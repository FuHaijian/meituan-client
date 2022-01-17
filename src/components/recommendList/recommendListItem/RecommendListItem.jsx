import React from "react"
import LazyLoad from "react-lazyload"
import { useHistory } from "react-router-dom"
import loading from '@/assets/images/loading.gif'
import { floatAdd, floatSub, uniq, arrDelete } from '@/api/utils.js'
import * as mainActions from '@/pages/Main/store/actionCreators'
import { connect } from "react-redux"
import SubIcon from '@/assets/icon/sub.png'
import AddIcon from '@/assets/icon/add.png'

import './recommendListItem.css'


const RecommendListItem = (props) => {
    let { 
        goodData,
        selectedGoods,
        totalAccount,
        compressedData,
        totalNum,
        isSelected
    } = props
    // action 
    const { 
        setCompressedData,
        setCartInfo, 
        setTotalAccount,
        setTotalNum,
        setIsSelected
     } = props
    const history = useHistory()
    const changeShoppingCart = (good, price) => {
        if(price > 0) {
            compressedData[good.id] = compressedData[good.id] > 0?compressedData[good.id] + 1 : 1
            isSelected[good.id] = isSelected[good.id]?isSelected[good.id]:true
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
                delete isSelected[good.id]
                selectedGoods = arrDelete(good, selectedGoods)
            }
            // 改变总数 和 总金额
            setTotalAccount(floatSub(totalAccount, -price))
            setTotalNum(totalNum - 1)
        }
        // 改变单个数量
        isSelected = compressedData
        setIsSelected(isSelected)
        setCompressedData(compressedData)
        setCartInfo(selectedGoods)
    }
    return (
        <div className="listItem__container">
            <div className="listItem__container__pic">
                <LazyLoad
                     height={140}
                     placeholder={
                         <img height="100%" width="100%" 
                         src={loading}/>}
                >
                    <img src={goodData.imgsrc} onClick={() => history.push(`/detail/${goodData.id}`)}/>
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
                    compressedData[goodData.id] > 0?
                    <div className="recommend__oprateNum">
                        <img src={SubIcon} className="recommend__subNum" 
                            onClick={() => changeShoppingCart(goodData, -goodData.price)} />
                        <span className="recommend__goodsNum">{compressedData[goodData.id]}</span>
                        <img src={AddIcon} className="recommend__addNum" 
                            onClick={() => changeShoppingCart(goodData, goodData.price)} />
                    </div>
                    :<div 
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
        compressedData: state.main.compressedData,
        isSelected: state.main.isSelected,
        totalNum: state.main.totalNum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCompressedData(data) {
            dispatch(mainActions.setCompressedData(data))
        },
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

export default connect(mapStateToProps, mapDispatchToProps)(RecommendListItem)