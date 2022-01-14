import React from "react"
import styled from "styled-components"

const Benefits = styled.div`
    display: flex;
    height: 30px;
    .userBenefits__card, .userBenefits__cash {
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        flex: 1;
        font-weight: 700;
    }
    .cardsNum, .cashAmount{
        font-size: 23px;
    }
    .userBenefits__card {
        border-right: 1px solid #d3d7db;
    }
`

const userBenefits = (props) => {
    return (
        <Benefits>
            <div className="userBenefits__card">
                    <span className="cardsNum">
                        {0}
                    </span>
                    张优惠卡
                </div>
                <div className="userBenefits__cash">
                    <span className="cashAmount">
                        {0}
                    </span>
                    元现金红包
                </div>
        </Benefits>
    )
}

export default userBenefits