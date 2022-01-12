import React, { useEffect } from "react";
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import Scroll from '@/baseUI/scroll'

import './menuBar_Top.css'

const MenuBarTop_List = (props) => {
    const { menuBarData=[], menuBarFixed } = props
    return (
        <div className={menuBarFixed?"menuBar menuBar-fixed":"menuBar"}>
               <div>
                   <div className="menuBar__container">
                   {
                       menuBarData.map(item => 
                           <div className="menuBar__item" key={item.id}>
                               <img src={item.picUrl} />
                               <div className="menuBar__item__desc">{item.type}</div>
                           </div>
                       )
                   }
                    </div>
               </div>
        </div>
    )
}

export default MenuBarTop_List