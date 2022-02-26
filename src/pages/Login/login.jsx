import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// 实现ui组件和数据连接
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
// 引入redux中的authAtcion.js/loginUser定义的方法
import { loginUser } from '../My/store/actionCreators'
import cx from 'classnames'
import Captcha from 'react-captcha-code'
import { useCallback } from 'react'

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
    height: 200px;
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
    /* height: 200px; */
    width: 100vw;
    box-sizing: border-box;
    background-color: #fff;
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
    .captcha {
        width: 50vw;
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
`
const ToggleButtom = styled.div`
    color: blue;
    font-size: 13px;
    margin-left: 30px;
`
const Login = (props) => {
    const { loginUser } = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [type, setType] = useState('login');
    useEffect(() => {
        document.title = type == 'login' ? '登录' : '注册'
    }, [type])

    const handleChange = useCallback((captcha) => {
        console.log('captcha:', captcha);
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
        console.log(username, password, '-=-=-=');
        // 发请求
        try {
            if (type == 'login') { // 登录
                loginUser({ username, password })
                    .then(() => {
                        console.log(data);
                        alert(data.msg)
                    })
                localStorage.setItem('token', data.data.token)
                history.push('/home/my')
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
                setType('login')
            }
        } catch (error) {

        }
    }
    const history = useHistory()
    return (
        <div className="loginContainer" style={{ minHeight: "100vh", width: "100vw", backgroundColor: '#fff' }}>
            <Return>
                <div className="return_icon" onClick={() => history.goBack()}></div>
                <div className="return_desc"></div>
            </Return>
            <Logo>
                <div className="logo_img">
                    <img src="http://127.0.0.1:9090/images/assets/logo.jpg" />
                </div>
            </Logo>
            <UserInfo>
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
                        <>
                            <input
                                type="text"
                                placeholder="请输入验证码"
                                className='captcha'
                                onChange={(e) => setVerify(e.target.value)}
                            />
                            <Captcha charNum={4} onChange={handleChange} />
                        </> : null
                }
                {
                    type == 'login' 
                    ?<button className={password && username ? 'active submit' : 'submit'} onClick={() => onSubmit()}>
                        登录
                    </button> 
                    :<button className={verify && password && username ? 'active submit' : 'submit'} onClick={() => onSubmit()}>
                        注册
                    </button>
                }
                
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
const mapStateToProps = (state) => ({
    // auth 在reducers下定义的一大的reducers
    // auth :state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(Login);