import React from "react"
import styled from "styled-components"
import SearchIcon from '../../../assets/navbarImg/search.png'

const Container = styled.div`
    height: 30px;
    padding: 10px 30px;
    background-color: #fff;
    .container__search {
        width: 100%;
        height: 30px;
        border-radius: 20px;
        border: 2px solid #e4d055;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .search-icon {
            width: 13px;
            height: 13px;
            display: inline;
            margin: 0 10px;
        }
        .search-desc {
            font-size: 13px;
            color: #909090;
        }
    }
    
`

const SearchBar = (props) => {
    const { gotoSearch } = props
    return (
        <Container>
            <div className="container__search" onClick={() => gotoSearch()}>
                <img src={SearchIcon} alt="" className="search-icon" />
                <div className="search-desc">牛奶</div>
            </div>
        </Container>
    )
}

export default SearchBar