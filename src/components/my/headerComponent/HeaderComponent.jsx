import React from "react";
import styled from "styled-components";
import NewsIcon from '@/assets/navbarImg/news.png'

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 50px;
    background-color: pink;
    .userImg
        width: 40px;
        height: 40px;
        img
            width: 40px;
            height: 40px;

`

const HeaderComponent = () => {
    return (
        <Container>
            <div className="userImg">
                <img src={NewsIcon} alt="" />
            </div>
            <div className="userName">

            </div>
            <div className="news">
                <img src={NewsIcon} />
            </div>
        </Container>
    )
}

export default HeaderComponent