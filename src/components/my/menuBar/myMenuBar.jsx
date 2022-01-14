import React, { useEffect } from "react";
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import MenuBarItem from './menuBarItem/MenuBarItem';

import './myMenuBar.css'

const MenuBar = (props) => {
    const { menuBarData={} } = props
    useEffect(() => {
        new Swiper('.swiper',{
            direction:'horizontal',
            scrollbar: {
                el: '.swiper-scrollbar',
              },
          })
    }, [])
    return (
        <div className="swiper-bg-my">
            <div className="swiper-region-my">
                <div className="swiper">
                    <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <MenuBarItem menuBarData={menuBarData.list1}/>
                                <MenuBarItem menuBarData={menuBarData.list2}/>
                            </div>
                            <div className="swiper-slide">
                                <MenuBarItem menuBarData={menuBarData.list3}/>
                                <MenuBarItem menuBarData={menuBarData.list4}/>
                            </div>
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    )
}

export default MenuBar