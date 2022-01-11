import React, { useEffect, useState, memo, useLayoutEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
// import HeadNumIcon from '@/common/HeadNumIcon/HeadNumIcon';
import { actionCreators } from '@/pages/Main/store'
import MainIconActive from '@/assets/tabbarImg/main-active.png'
import MainIcon from '@/assets/tabbarImg/main.png'
import ClassifyIcon from '@/assets/tabbarImg/classify.png'
import ClassifyIconActive from '@/assets/tabbarImg/classify-active.png'
import ShoppingCartIconActive from '../../assets/tabbarImg/shoppingCart-active.png'
import ShoppingCartIcon from '../../assets/tabbarImg/shoppingCart.png'
import MyIcon from '@/assets/tabbarImg/my.png'
import MyIconActive from '@/assets/tabbarImg/my-active.png'

import './Tabbuttom.css'

const Bottom = (props) => {
    let { route, index } = props;
    const { setIndexDispatch:changeIndex } = props
    // 根据用户直接访问的处理， 非首页
    const { pathname } = useLocation();
    const { routes } = route;
    index = routes.findIndex(item => item.path == pathname) - 1;
    
    return (
        <>
            {/* 二级路由而准备 */}
            {renderRoutes(route.routes)}
            {/* tabbar位置 */}
            <ul className="tabbar-warpper">
                <li
                    onClick={() => { changeIndex(0) }}
                    className="tabbar-warpper__item"
                    key="1">
                    <Link to="/home/main" style={{ textDecoration: "none" }}>
                        <div className='tabbar-wrapper__item-link'>
                            <img className='icon' 
                                src={
                                    index === 0
                                    ?MainIconActive
                                    :MainIcon
                                }></img>
                            <div className="desc">
                                首页
                            </div>
                        </div>
                        
                    </Link>
                </li>
                <li
                    onClick={() => { changeIndex(1) }}
                    className="tabbar-warpper__item"
                    key="2">
                    <Link to="/home/classify" style={{ textDecoration: "none" }}>
                        <div className='tabbar-wrapper__item-link'>
                            <img className='icon' 
                                src={
                                    index === 1
                                    ?ClassifyIconActive
                                    :ClassifyIcon
                                }></img>
                            <div className="desc">
                                分类
                            </div>
                        </div>
                        
                    </Link>
                </li>
                <li
                    onClick={() => { changeIndex(2) }}
                    className="tabbar-warpper__item"
                    key="3">
                    <Link to="/home/shoppingCart" style={{ textDecoration: "none" }}>
                        <div className='tabbar-wrapper__item-link'>
                            <img className='icon' 
                                src={
                                    index === 2
                                    ?ShoppingCartIconActive
                                    :ShoppingCartIcon
                                }></img>
                            <div className="desc">
                                购物车
                            </div>
                        </div>
                        
                    </Link>
                </li>
                <li
                    onClick={() => { changeIndex(3) }}
                    className="tabbar-warpper__item"
                    key="4">
                    <Link to="/home/my" style={{ textDecoration: "none" }}>
                        <div className='tabbar-wrapper__item-link'>
                            <img className='icon' 
                                src={
                                    index === 3
                                    ?MyIconActive
                                    :MyIcon
                                }></img>
                            <div className="desc">
                                我的
                            </div>
                        </div>
                        
                    </Link>
                </li>
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        num: state.main.num,
        index: state.main.index
    }
}

// setIndex changeIndex
// 1. dispatch能力
// 2. 返回值是一个对象
const mapDispatchToProps = (dispatch) => {
    return {
        setIndexDispatch(index)  {
            dispatch(actionCreators.setIndex(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Bottom))