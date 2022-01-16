import React, { useState } from "react"
import styled from "styled-components"
import SearchIcon from '@/assets/navbarImg/search.png'

const Top = styled.div`
    height: 50px;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    .searchButtom, .goBackButtom {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: #e4e4e1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .goBackButtom {
        margin-left: 10px;
        .goBackIcon {
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
            margin-left: 3px;
            border-bottom: 3px solid #1d1d1e;
            border-left: 3px solid #1d1d1e;
        }    
    }
    .searchInput {
        /* transition: width ease 1s; */
        flex: 1;
        margin: 0 10px;
        background-color:#e1e1e1;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: left;
        display: flex;
        .searchIcon {
            margin-left: 10px;
            width: 15px;
            height: 15px;
        }
        .recommend {
            margin-left: 10px;
            color:#9d9e9b;
        }
    }
    .searchButtom {
        margin-right: 10px;
        .searchIcon {
            width: 15px;
            height: 15px;
        }
    }
`
const NavToTop = styled.div`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100vw;
    z-index: 999;
`


const NavBar = (props) => {
    const { goBack, goToSearch, navBarStyle } = props
    return (
        <NavToTop style={navBarStyle?{backgroundColor: "#fff"}:{}}>
            <Top>
                <div className="goBackButtom" onClick={() => goBack()}>
                    <div className="goBackIcon"></div> 
                </div>
                <div 
                    className="searchInput" 
                    style={navBarStyle?{visibility: "visible"}:{visibility: "hidden"}}
                    onClick={() => goToSearch()}    
                >
                    <img className="searchIcon" src={SearchIcon} alt="" />
                    <div className="recommend">牛奶</div>
                </div>
                <div 
                    style={navBarStyle?{visibility: "hidden",width: 0}:{visibility: "visible"}}
                    className="searchButtom" 
                    onClick={() => goToSearch()}
                >
                    <img src={SearchIcon} className="searchIcon" />
                </div>
            </Top>
        </NavToTop>
        
    )
}

export default NavBar