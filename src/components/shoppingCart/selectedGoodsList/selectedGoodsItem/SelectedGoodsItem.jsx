import React, { useState } from "react"
import AddIcon from '@/assets/images/add.png'
import SubIcon from '@/assets/images/sub.png'
import SelectedIcon from '@/assets/images/selected.png'

import './SelectedGoodsItem.css'

const SelectedGoodsItem = (props) => {
    const { goodData={} } = props
    const [i, setI] = useState(1)
    let [num, setNum] = useState(1)
    // console.log(goodData, '-----');
    return (
        <div className="selectedGoodsItem">
            <div className="selectedGoodsItem__selectButton">
                <div className="isSelected" onClick={() => setI(!i)}>
                    {
                        i?<img src={SelectedIcon} />:<div className="noSeleted"></div>
                    }
                </div>
            </div>
            <div className="selectedGoodsItem__img">
                <img src={goodData.imgsrc} />
            </div>
            <div className="selectedGoodsItem__goodsInfo">
                <div className="selectedGoodsItem__goodsInfo_title">
                    {
                        goodData.tags.map(tag => 
                            <div className="tag" key={tag}>{tag}</div>
                        )
                    }
                    {goodData.title}
                </div>
                <div className="selectedGoodsItem__goodsInfo_trade">
                    {goodData.tradeDescription}
                </div>
                <div className="selectedGoodsItem__goodsInfo_price">
                    ￥{goodData.price}
                </div>
                <div className="selectedGoodsItem__goodsInfo_buttom">
                    <img src={SubIcon} className="subButtom" onClick={() => {setNum(--num)}}/>
                     <div className="goodsNum">{num}</div>
                    <img src={AddIcon} className="addButtom" onClick={() => {setNum(++num)}}/>
                </div>
            </div>
        </div>
    )
}

export default SelectedGoodsItem