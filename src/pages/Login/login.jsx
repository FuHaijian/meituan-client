import React, { useEffect, useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { loginUser } from '../My/store/actionCreators'
// import Captcha from 'react-captcha-code'
import axios from 'axios'

const Return = styled.div`
    height: 50px;
    width: 100vw;
    box-sizing: border-box;
    padding: 15px 15px;
    background-color: #fff;
    .return_icon {
        height: 10px;
        width: 10px;
        transform:rotate(-45deg);
        border-left: 2px solid #333;
        border-top: 2px solid #333;
    }
    .return_desc {

    }
`
const Logo = styled.div`
    background-color: #fff;
    position: relative;
    height: 150px;
    width: 100vw;
    .logo_img {
        height: 120px;
        width: 120px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            height: 120px;
            width: 120px;
        }
    }
`
const UserInfo = styled.div`
    padding: 10px 30px;
    width: 100vw;
    box-sizing: border-box;
    background-color: #fff;
    .iform {
        display: flex;
        flex-direction: column;
        .password, 
        .userName,
        .captcha {
            border: none;
            outline: 0;
            height: 50px;
            margin-top: 20px;
            line-height: 40px;
            border-bottom: 2px solid #e5e5e5;
            font-size: 18px;
        }
        .captchaContent {
            position: relative;
        }
        .captcha {
            width: 60vw;
        }
        .captchaPic {
            width: 20vw;
            height: 40px;
            position: absolute;
            right: 0;
            top: 20px;
        }
        .submit {
            height: 40px;
            background-color: #fffce8;
            color: #dfc466;
            border: none;
            margin: 20px 0;
            border-radius: 20px;
            box-sizing: border-box;
            font-size: 18px;
        }
        .active {
            background-color: #f78e0a;
            color: #fff;
        }
    }
`
const ToggleButtom = styled.div`
    color: blue;
    font-size: 13px;
    margin-left: 30px;
`
const Login = (props) => {
    const { loginUser, isLogin } = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [type, setType] = useState('login');
    useEffect(() => {
        document.title = type == 'login' ? '登录' : '注册'
    }, [type])

    const handleChange = useCallback((captcha) => {
        // console.log('captcha:', captcha);
        setCaptcha(captcha)
    }, []);
    // 登录注册
    const onSubmit = async () => {
        if (!username) {
            alert('请输入账号')
            return
        }
        if (!password) {
            alert('请输入密码')
            return
        }
        // 发请求
        try {
            if (type == 'login') { // 登录
                await loginUser(username, password)
                if (!isLogin) {
                    alert('用户名或密码错误')
                    alert('无需注册, 用户名随意, 初始密码为123456')
                } else {
                    alert('登录成功')
                    setTimeout(() => {
                        history.push('/home/my')
                    }, 1000)
                }
            } else { // 注册
                if (!verify) {
                    alert('请输入验证码')
                    return
                }
                if (verify != captcha) {
                    alert('验证码错误')
                    return
                }
                const data = await post('/api/user/register', {
                    username,
                    password
                })
                alert(data.msg)
                alert('opopo')
                setType('login')
            }
        } catch (error) {
            alert(error)
        }
    }
    const history = useHistory()
    return (
        <div className="loginContainer" style={{ minHeight: "100vh", width: "100vw", backgroundColor: '#fff' }}>
            <Return>
                {
                    type == 'login'
                        ? <div className="return_icon" onClick={() => history.goBack()}></div>
                        : <div className="return_icon" onClick={() => setType('login')}></div>
                }
                <div className="return_desc"></div>
            </Return>
            <Logo>
                <div className="logo_img">
                    <img src="http://127.0.0.1:9090/images/assets/logo.jpg" />
                </div>
            </Logo>
            <UserInfo>
                <form className='iform'>
                    <input
                        type="text"
                        placeholder='请输入用户名'
                        className="userName"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='请输入密码'
                        className="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        type == 'register' ?
                            <div className='captchaContent'>
                                <input
                                    type="text"
                                    placeholder="请输入验证码"
                                    className='captcha'
                                    onChange={(e) => setVerify(e.target.value)}
                                />
                                {/* <Captcha className='captchaPic' charNum={4} onChange={handleChange} /> */}
                            </div> : null
                    }
                    {
                        type == 'login'
                            ? <button className={password && username ? 'active submit' : 'submit'} onClick={() => onSubmit()}>
                                登录
                            </button>
                            : <button className={verify && password && username ? 'active submit' : 'submit'} onClick={() => onSubmit()}>
                                注册
                            </button>
                    }
                </form>
            </UserInfo>
            {
                type == 'login' ?
                    <ToggleButtom onClick={() => setType('register')}>没有账号？去注册</ToggleButtom> :
                    <ToggleButtom onClick={() => setType('login')}>去登录</ToggleButtom>
            }
        </div>
    )
}
// 将返回的状态转换成属性
const mapStateToProps = (state) => {
    return {
        isLogin: state.my.isAuthenticated
    }
}
export default connect(mapStateToProps, { loginUser })(Login);