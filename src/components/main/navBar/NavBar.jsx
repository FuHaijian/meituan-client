import React from "react";
import NewsIcon from '@/assets/navbarImg/news.png'
import searchIcon from '@/assets/navbarImg/search.png'

import './NavBar.css'

const NarBar = (props) => {
    const { goToSearch, navBarFixed } = props
    return (
        <div className={navBarFixed?"navBar navBar-fixed":"navBar"}>
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
                <img src={NewsIcon} />
            </div>
        </div>
    )
}

export default NarBar