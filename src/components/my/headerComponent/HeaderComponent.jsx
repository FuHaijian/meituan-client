import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
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

const HeaderComponent = (props) => {
    const { UserLogin } = props
    const history = useHistory()

    return (
        <Container>
            {/* <div className="userImg" onClick={() => UserLogin()}>
                <img src={DefaultUserImg}/>
            </div>
            <div className="userName" onClick={() => UserLogin()} >
                点击登录
            </div> */}
            <div className="userImg">
                <img src={DefaultUserImg}/>
            </div>
            <div className="userName" onClick={() => history.push('/login')} >
                点击登录
            </div>
            <div className="news">
                <img src={NewsIcon} />
            </div>
        </Container>
    )
}

export default HeaderComponent