import React, { useEffect } from "react"
import styled from "styled-components"

const Tip = styled.div`
    background-color: #343334;
    width: 120px;
    height: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 50;
    text-align: center;
    border-radius: 10px;
    display: fixed;
    top: 50%;
    left: 50%;
    z-index: 50;
`

const TipPopup = (props) => {
    let { isDisplay } = props
    // useEffect(() => {
    //     setInterval(() => {
    //         isDisplay = false
    //     }, )
    // }, 1000)
    return (
        <Tip style={isDisplay?{visibility: "hidden"}:{visibility: "visible"}}>
            加入购物车成功
        </Tip>
    )

}

export default TipPopup