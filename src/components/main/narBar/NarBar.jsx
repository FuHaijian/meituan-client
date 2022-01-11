import React from "react";
import NewIcon from '@/assets/navbarImg/news.png'
import searchIcon from '@/assets/navbarImg/search.png'
import { Link } from "react-router-dom";

import './NarBar.css'

const NarBar = (props) => {
    const { goToSearch } = props
    return (
        <div className="navBar">
            <div className="navBar__proName">
                美团优选
            </div>
            <div className="navBar__search" onClick={() => goToSearch()}>
                <img src={searchIcon} />
                <div className="navBar__search-recommend">
                    王老吉
                </div>
            </div>
            <div className="navBar__news">
                <img src={NewIcon} alt="" />
            </div>
        </div>
    )
}

export default NarBar