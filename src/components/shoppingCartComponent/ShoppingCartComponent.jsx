import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import shoppingCartIcon from '@/assets/images/shoppingCart.png'

import './ShoppingCartComponent.css'

const shoppingCartComponent = (props) => {
    const { totalAccount, totalNum } = props

    const history = useHistory()
    const gotoCart = () =>  history.push('/home/shoppingCart')

    return (
        <div className="container" style={totalNum > 0?{display:""}:{display:"none"}}>
            <div className="container__shoppingIcon" onClick={() => gotoCart()}>
                <img src={shoppingCartIcon} />
                <div className="container__numIcon">{totalNum}</div>
            </div>
            <div className="container__buttom" onClick={() => gotoCart()}>
                <div className="container__buttom_totalAmount">
                    ￥{totalAccount}
                </div>
                <div className="container__buttom_desc">
                    去支付 {">"}
                </div> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalAccount: state.main.totalAccount, 
        totalNum: state.main.totalNum
    }
}

export default connect(mapStateToProps, {})(shoppingCartComponent)