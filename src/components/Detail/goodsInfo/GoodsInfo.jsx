import React from "react"

import './GoodsInfo.css'

const GoodsInfo = (props) => {
    const { goodsData={} } = props
    return (
        <>
            {
            goodsData ?
                <div className="goods__container">
                    <div className="goods__container-price">
                        <div className="goods__container-price_item">
                            ￥{goodsData.price}
                        </div>
                    </div>
                    <div className="goods__container-desc">
                        <div className="goods__container-desc_title">
                            {
                                goodsData.tags?
                                goodsData.tags.map((item, index) =>
                                    <span className="tag" key={index}>
                                        {item}
                                    </span>
                                ):""
                            }
                            {goodsData.title}
                        </div>
                        <div className="goods__container-desc_declarations">
                            {
                                goodsData.declarations?
                                goodsData.declarations.map((item, index) =>
                                    <div className="declarationItem" key={index}>
                                        {
                                            item.title ?
                                                <div className="declarationItem-title">
                                                    {item.title}
                                                </div> : ""
                                        }
                                        <div className="declarationItem-info">
                                            {item.info}
                                        </div>
                                    </div>
                                ):""
                            }
                        </div>
                    </div>
                </div> : <></>
        }
        </>
        

    )
}

export default GoodsInfo