import React, { useEffect, useState } from "react"
import shoppingCartIcon from '@/assets/images/shoppingCart.png'

import './ShoppingCartComponent.css'

const shoppingCartComponent = (props) => {
    const { selectedGoods=[], totalAccount } = props

    const { goToCart } = props

    return (
        <div className="container" style={selectedGoods.length?{display:""}:{display:"none"}}>
            <div className="container__shoppingIcon" onClick={() => goToCart()}>
                <img src={shoppingCartIcon} />
                <div className="container__numIcon">{selectedGoods.length}</div>
            </div>
            <div className="container__buttom" onClick={() => goToCart()}>
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

export default shoppingCartComponent