import React, { useEffect } from "react"
import Swiper from "swiper"
import 'swiper/css/swiper.min.css'

import './ImgList.css'

const ImgList = (props) => {
    const { ImgListData = [] } = props
    useEffect(() => {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay:{
                delay: 1000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        })
    }, [])
    return (
        <div className="rotation-box">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    ImgListData.map((item, index) => {
                        return (
                            <div 
                            key={index}
                            className="swiper-slide">
                                <a href={item.linkUrl}>
                                    <img src={item.imgsrc} className='rotationChart-img' />
                                </a>
                            </div>
                        )
                    })
                }
                </div>
                <div className="swiper-pagination"></div>
            </div>
            
        </div>
    )
}

export default ImgList