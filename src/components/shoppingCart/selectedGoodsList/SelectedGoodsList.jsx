import React, { useEffect, useState, memo } from "react"
import { connect } from "react-redux"
import EmptyCartIcon from '../../../assets/images/enpty_cart.png'
import SelectedGoodsItem from './selectedGoodsItem/SelectedGoodsItem.jsx'

import './SelectedGoodsList.css'

const SelectedGoodsList = (props) => {
    const { selectedGoodsData=[]} = props
    const [isChange_List, setIsChange_List] = useState(false)
    const [selectedGoods, setSelectedGoods] = useState(JSON.parse(JSON.stringify(selectedGoodsData)))
    console.log(selectedGoods, '_+_+__+');
    useEffect(() => {
        setSelectedGoods(JSON.parse(JSON.stringify(selectedGoodsData)))
        console.log('9090');
    }, [selectedGoodsData])
    return (
        <div className="GoodsList__container">
            {
                !selectedGoods.length
                ?<div className="container-empty_cart">
                    <img src={EmptyCartIcon} className="empty_cart__icon" />
                    <div className="empty_cart__desc">您的购物车还是空的，快去逛逛吧</div>
                    <div className="empty_cart__button" onClick={() => goToShopping()}>去逛逛</div>
                </div>
                :<div className="container-goodsList">
                    {
                        selectedGoods.map((item, index) => 
                            <SelectedGoodsItem  
                                key={index} 
                                goodData={item} 
                                isChange_List={isChange_List}
                                setIsChange_List={setIsChange_List}
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