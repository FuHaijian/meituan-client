import React, { useEffect, useState, memo } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import EmptyCartIcon from '../../../assets/images/enpty_cart.png'
import SelectedGoodsItem from './selectedGoodsItem/SelectedGoodsItem.jsx'

import './SelectedGoodsList.css'

const SelectedGoodsList = (props) => {
    const { selectedGoodsData=[]} = props
    const history = useHistory()
    return (
        <div className="GoodsList__container">
            {
                !selectedGoodsData.length
                ?<div className="container-empty_cart">
                    <img src={EmptyCartIcon} className="empty_cart__icon" />
                    <div className="empty_cart__desc">您的购物车还是空的，快去逛逛吧</div>
                    <div className="empty_cart__button" onClick={() => history.push('/home/main')}>去逛逛</div>
                </div>
                :<div className="container-goodsList">
                    {
                        selectedGoodsData.map((item, index) => 
                            <SelectedGoodsItem  
                                key={index} 
                                goodData={item} 
                            />
                        )
                    }
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        selectedGoodsData: state.main.selectedGoods
    }
}

export default connect(mapStateToProps, {})(memo(SelectedGoodsList))