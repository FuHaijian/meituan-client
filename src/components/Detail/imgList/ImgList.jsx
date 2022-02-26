import React, { useEffect } from "react"
import Swiper from "swiper"
import styled from "styled-components"
import 'swiper/css/swiper.min.css'

const Rotation_box = styled.div`
    width: 100vw;
    height: 100vw;
    overflow: hidden;
`
const ImgList = (props) => {
    const { ImgListData = [] } = props
    useEffect(() => {
        new Swiper('.swiper', {
            autoplay: 5000,
            loop: true
        })
    }, [])
    return (
        <Rotation_box>
            {
                ImgListData.length ?
                    <div className="swiper" style={{ height: '100vw' }}>
                        <div className="swiper-wrapper" style={{ padding: '0px' }}>
                            <div className="swiper-slide"><img style={{ height: '100vw',width: '100vw' }} src={ImgListData[0].imgsrc}/></div>
                            <div className="swiper-slide"><img style={{ height: '100vw',width: '100vw' }} src={ImgListData[1].imgsrc}/></div>
                            <div className="swiper-slide"><img style={{ height: '100vw',width: '100vw' }} src={ImgListData[2].imgsrc}/></div>
                        </div>
                    </div> : <></>
            }
        </Rotation_box>
    )
}

export default ImgList