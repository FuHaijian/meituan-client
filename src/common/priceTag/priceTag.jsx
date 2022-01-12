import React from 'react'
import styled from 'styled-components'

const Tag = styled.div`
    height 15px;
    background-color #fdf2bf;
    font-size 10px;
    color #ff190c;
    font-weight 700;
    display inline;
    padding 0 2px;
    border-radius 5px;
    position absolute;
`

const PriceTag = (props) => {
    const { bottom, left, price } = props
    return (
        <Tag style={{bottom:`${bottom}px`, left: `${left}px`}}>
            ￥{price}
        </Tag>
    )
}

export default PriceTag