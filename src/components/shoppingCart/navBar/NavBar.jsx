import React from "react";

import './NavBar.css'

const NavBar = (props) => {
    const { navBarFixed } = props
    return (
        // <div className={navBarFixed?"navBar__container navBar__container-fixed":"navBar__container"}>
            <div className="navBar__container">
             <div className="navBar__container-title">
                购物车
            </div>
        </div>
    )
}

export default NavBar