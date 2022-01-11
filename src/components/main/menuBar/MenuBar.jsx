import React, { useEffect } from "react";
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import MenuBarItem from './menuBarItem/MenuBarItem';

import './MenuBar.css'

const MenuBar = (props) => {
    const { menuBarData={list1:[], list2: []} } = props

    useEffect(() => {
        new Swiper('.swiper',{
            slidesPerView: 3,
            grid: {
              fill: 'column',
              rows: 2,
            },
          })
    }, [])
    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                {
                    menuBarData.list1.map(item => 
                        <div className="swiper-slide" role="group" key={item.id}>
                            <img src={item.picUrl} alt="" className="item-box__img" />
                            <div className="item-box__text">{item.type}</div>
                        </div>
                    )
                }   
            </div>
        </div>
            
    )
}

export default MenuBar