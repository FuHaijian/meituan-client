import React, { useState, memo } from "react"
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
        totalNum
    } = props
    // action 
    const {
        getMore,
        setTotalAccount,
        setTotalNum,
        setSelectedGoods,
        setAllSelected
    } = props
    const [isLoading, setIsLoading] = useState(false)
    const changeShoppingCart = (good, price) => {
        let index = selectedGoods.findIndex(item => item.id == good.id)
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
        setSelectedGoods(selectedGoods)
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
    // 上拉加载更多
    const handlePullUp = async () => {
        if (!isLoading) {
            await setTimeout(() => {
                setIsLoading(true)
                getMore(++page)
            }, 1000)
        }
        setIsLoading(false)
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
                                        selectedGoods[selectedGoods.findIndex(i => i.id == item.id)] ?
                                            <div className="selectedGoodsItem__goodsInfo_buttom">
                                                <img src={SubIcon} className="subButtom" onClick={() => changeShoppingCart(item, -item.price)} />
                                                <div className="goodsNum">{selectedGoods[selectedGoods.findIndex(i => i.id == item.id)].num}</div>
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
        totalNum: state.main.totalNum
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
        setAllSelected(booolean) {
            dispatch(mainActions.setAllSelected(booolean))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(GoodsList))