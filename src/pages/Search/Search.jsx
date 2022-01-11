import React from "react";
import { useHistory } from "react-router-dom";

import './Search.css'

const Search = () => {
    const history = useHistory()
    return (
        <>
            <div className="page">
                <div className="back" onClick={() => history.goBack()}></div>
                返回
            </div>
        </>
    )
}

export default Search