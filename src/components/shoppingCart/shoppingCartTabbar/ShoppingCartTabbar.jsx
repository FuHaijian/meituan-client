import React, { useState, memo, useEffect } from "react"
import styled from "styled-components"
import SelectedIcon from '@/assets/icon/selected.png'
import { connect } from "react-redux"
import * as mainActions from '@/pages/Main/store/actionCreators'

const Bar = styled.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 52px;
    background-color: #fff;
    display: flex;
    padding: 0 10px;
`
const SelectedButtom = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .allSelected_TRUE {
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border:2px solid #c9c9c9 ;
        display: inline-block;
        margin-right: 5px;
        box-sizing: border-box;
    }
    .desc {
        font-size: 12px;
    }
    img {
        width: 22px;
        height: 22px;
        margin-right: 5px;
    }
`
const TotalAccount = styled.div`
    flex: 1;
    line-height: 50px;
    text-align: right;
    font-weight: 700;
    .totalNum {
        margin-right: 10px;
        color:#fd0020;
        font-size: 16px;
    }
`
const PayButtom = styled.div`
    width: 120px;
    line-height: 36px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    margin: 7px 0;
    border-radius: 30px;
    margin-right: 20px;
`

const ShoppingCartTabbar = (props) => {
    let flag = true
    const { totalNum=0, isSelected={}, totalAccount=0 } = props
    const [allSelected, setAllSelected] = useState(true)
    const { setIsSelectedData } = props
    const changeSelected = () => {
        let selectedData = {}
        // console.log(isSelected, '-=-=-=--');
        if(flag) {
            Object.keys(isSelected).forEach(key => {
                selectedData[key] = true
            })
        } else {
            Object.keys(isSelected).forEach(key => {
                selectedData[key] = false
            })
        }
        // console.log(selectedData, '___-----');
        setIsSelectedData(selectedData)
        setAllSelected(!allSelected) 
    }
    const getAllSelected = () => {
        Object.keys(isSelected).forEach((key) => {
            // console.log(isSelected[key], '++++++');
            if(!isSelected[key]) 
                flag = false
        })
        if(!flag){
            setAllSelected(false)
        }  
    }
    getAllSelected()
    useEffect(() => {
        getAllSelected()
    }, [isSelected])
    return (
        <Bar>
            <SelectedButtom>
                {
                    !allSelected
                        ? <div className="allSelected_TRUE" onClick={() => changeSelected()}></div>
                        : <img src={SelectedIcon} className="allSelected_FALSE" onClick={() => changeSelected()}></img>
                }
                <span className="desc">
                    全选
                </span>
            </SelectedButtom>
            <TotalAccount>
                <span className="title">合计：</span>
                <span className="totalNum">￥{
                    (allSelected && totalAccount != 0)
                        ?  totalAccount 
                        : 0
                }</span>
            </TotalAccount>
            <PayButtom style={totalNum == 0 ? { backgroundColor: "#faeb7d" } : { backgroundColor: "#ffd105" }}>
                去支付
                {
                    (allSelected && totalNum != 0) ? `(${totalNum})` : ""
                }
            </PayButtom>
        </Bar>
    )
}

const mapStateToProps = (state) => {
    return {
        isSelected: state.main.isSelected,
        totalNum: state.main.totalNum,
        totalAccount: state.main.totalAccount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsSelectedData(data) {
            dispatch(mainActions.setIsSelected(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShoppingCartTabbar))