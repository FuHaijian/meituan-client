import React from "react"

import './SelectedGoodsItem.css'

const SelectedGoodsItem = (props) => {
    const { goodData={} } = props
    console.log(goodData, '-----');
    return (
        <div className="selectedGoodsItem">
            <div className="selectedGoodsItem__selectButton">
                <div className="selected">

                </div>
            </div>
            <div className="selectedGoodsItem__img">
                <img src={goodData.imgsrc} />
            </div>
            <div className="selectedGoodsItem__goodsInfo">
                <div className="selectedGoodsItem__goodsInfo_title">
                    {
                        goodData.tag.map(tag => 
                            <div className="tag" key={tag}>{tag}</div>
                        )
                    }
                    {/* {goodData.title} */}
                </div>
            </div>
        </div>
    )
}

export default SelectedGoodsItem