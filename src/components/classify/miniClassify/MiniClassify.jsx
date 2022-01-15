import React, { useState } from "react"
import styled from "styled-components"

const Srcoll_X = styled.div`
    height: 30px;
    width: 240px;
    background-color: #fff;
    overflow-x: scroll;
    white-space: nowrap;
    flex-wrap: nowrap;
    display: flex;
    align-items: center; 
    .item {
        background-color: #f4f7f7;
        margin: 0 5px;
        padding: 0 5px;
        border-radius: 10px;
        box-sizing: border-box;
        flex-shrink: 0;
    }
    .activeItem {
        background-color: #ffffd6;
        border: 2px solid #f3f37c;
    }
`

const MiniClassify = (props) => {
    const { miniMenuData=[], changeType } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const changeMiniMenu = (index, type) => {
        changeType(type)
        setActiveIndex(index)
    }
    return (
        <Srcoll_X>
            {
                miniMenuData.map((item, index) => 
                    <div 
                        className={activeIndex==index?"item activeItem":"item"} 
                        key={index}
                        onClick={() => changeMiniMenu(index, item.type)}
                    >
                        {item.title}
                    </div>
                )
            }
        </Srcoll_X>
    )
}

export default MiniClassify