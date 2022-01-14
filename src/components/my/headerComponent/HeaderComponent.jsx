import React from "react";
import styled from "styled-components";
import NewsIcon from '@/assets/navbarImg/news.png'
import DefaultUserImg from '@/assets/images/defaultUserImg.png'

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 80px;
    align-items: center;
    justify-content: center;
    .userImg {
        width: 40px;
        height: 40px;
        margin: 0 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        img {
            width: 40px;
            height: 40px;
        }       
    }
    .userName {
        flex: 1;
        font-size: 15px;
        font-weight: 700;
    }
    .news {
        height: 30px;
        width: 30px;
        margin: 0 20px;
        img {
            height: 30px;
            width: 30px;
        }
    } 

`

const HeaderComponent = () => {
    return (
        <Container>
            <div className="userImg">
                <img src={DefaultUserImg} />
            </div>
            <div className="userName">
                R517tehdehj2uh
            </div>
            <div className="news">
                <img src={NewsIcon} />
            </div>
        </Container>
    )
}

export default HeaderComponent