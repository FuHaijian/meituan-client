import React from "react"
import styled from "styled-components"
import WillPayIcon from '@/assets/icon/willPay.png'
import PickUpIcon from '@/assets/icon/pickUp.png'
import EvaluationIcon from '@/assets/icon/evaluation.png'
import AfterSaleIcon from '@/assets/icon/afterSale.png'
import AllOrdersIcon from '@/assets/icon/allOrders.png'
 
const OprationButtom = styled.div`
    height: 60px;
    background-color: #fff;
    display: flex;
    margin-top: 20px;
    border-radius: 10px;
`
const Item = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .middleBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
            width: 20px;
            height: 20px;
        }
        .desc {
            font-size: 13px;
        }
    }
    
`

const OrdersOprationButtom = (props) => {
    const { ButtomData=[] } = props
    let IconList = {
        "WillPayIcon":WillPayIcon,
        "PickUpIcon": PickUpIcon, 
        "EvaluationIcon":EvaluationIcon, 
        "AfterSaleIcon":AfterSaleIcon, 
        "AllOrdersIcon":AllOrdersIcon}
    return (
        <OprationButtom>
            {
            !ButtomData?
            <div></div>:
                ButtomData.map(item => 
                    <Item key={item.id}>
                        <div className="middleBox">
                            <img src={IconList[item.icon]} className="icon"></img>
                            <div className="desc">{item.title}</div>
                        </div>
                    </Item>
                )
            }
            
        </OprationButtom>
    )
}

export default OrdersOprationButtom