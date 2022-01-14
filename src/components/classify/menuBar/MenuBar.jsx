import React, { useState } from "react";
import styled from "styled-components";

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f7f7;
    color: #50545a;
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    font-size: 13px;
    .menuItem {
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
    }
    .activeItem {
        color: #141918;
        background-color: #fff;
        border-radius: 5px;
        font-weight: 700;
    }
` ;

const MenuBar = (props) => {
    const { menuData=[], changeType } = props
    const [activeIndex, setActiveIndex] = useState(0)
    const changeMenu = (index, type) => {
        setActiveIndex(index)
        changeType(type)
    }
    return (
        <MenuList>
            {
                menuData.map((item, index) => 
                    <div 
                        className={activeIndex==index?"activeItem menuItem":"menuItem"} 
                        key={index} 
                        onClick={() => changeMenu(index, item.type)}
                    >
                        {item.title}
                    </div>
                )
            }
        </MenuList>
    )
}

export default MenuBar