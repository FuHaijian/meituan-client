import React from "react"
import { connect } from "react-redux"
import * as mainActions from '@/pages/Main/store/actionCreators'
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import HomeIcon from '@/assets/tabbarImg/main.png'
import shoopingCartIcon from '@/assets/images/shoppingCart.png'
import { floatAdd } from '@/api/utils'

const ShoppingCart = styled.div`
    height: 50px;
    width: 100vw;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    z-index: 999;
    .tabbar__container {
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
            width: 80px;
            height: 25px;
            display: flex;
            position: relative;
            img {
                margin-left: 10px;
                width: 25px;
                height: 25px;
            }
            .goodsNum {
                position: absolute;
                top: -8px;
                right: 3px;
                background-color: #f5252e;
                width: 18px;
                height: 18px;
                color: #fff;
                font-weight: 700;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
            }
        }
        .buttom {
            margin:5px 10px;
            height: 40px;
            flex: 1;
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            .opration {
                flex: 1;
                height: 40px;
                font-size: 14px;
                font-weight: 700;
                line-height: 40px;
                text-align: center;
            }
            .entershopping {
                background-color: #fdd200;
            }
            .gotoPay {
                background-color: #fd5f10;
                color: #fff;
            }
        }
    }
`

const Opration_Tabbar = (props) => {
    let { goodsData, totalNum, selectedGoods, totalAccount } = props
    const history = useHistory()
    const { setSelectedGoods, setTotalNum, setTotalAccount, setAllSelected } = props
    let index = selectedGoods.findIndex(item => item.id == goodsData.id)
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
    return (
        <ShoppingCart>
            <div className="tabbar__container">
                <div className="icon">
                    <img src={HomeIcon} alt="" onClick={() => history.push('/home/main')} />
                    <img src={shoopingCartIcon} alt="" onClick={() => history.push('/home/shoppingCart')} />
                    {
                        totalNum ? <div className="goodsNum">{totalNum}</div> : <></>
                    }
                </div>
                <div className="buttom">
                    <div className="opration entershopping"
                        onClick={() => changeShoppingCart(goodsData, goodsData.price)}>
                        加入购物车
                    </div>
                    <div className="opration gotoPay">
                        立即购买
                    </div>
                </div>

            </div>
        </ShoppingCart>
    )
}

const mapStateToProps = (state) => {
    return {
        totalNum: state.main.totalNum,
        selectedGoods: state.main.selectedGoods,
        totalAccount: state.main.totalAccount
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedGoods(data) {
            dispatch(mainActions.setSelectedGoods(data))
        },
        setTotalNum(num) {
            dispatch(mainActions.setTotalNum(num))
        },
        setTotalAccount(account) {
            dispatch(mainActions.setTotalAccount(account))
        },
        setAllSelected(data) {
            dispatch(mainActions.setAllSelected(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Opration_Tabbar)