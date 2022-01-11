import React, { useEffect, useLayoutEffect, useState } from 'react'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import MenuBar from '@/components/main/menuBar/MenuBar'
import NarBar from '@/components/main/narBar/NarBar'

import './Main.css'
import { useLocation, useHistory } from 'react-router-dom'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Main = (props) => {
    // 状态
    const { mainData } = props
    const { menuBarData } = mainData
    // actions 
    const { getMainDataDispatch } = props
    const history = useHistory()
    useEffect(() => {
        if (!mainData.length) {
            getMainDataDispatch()
        }
    }, [])
    return (
        <div className='main'>
            <NarBar goToSearch={() => history.push('/search')}/>
            <Scroll
                direction={"vertical"}
                refresh={false}
            >
                <div className='main-padding'>
                    <MenuBar menuBarData={menuBarData} />
                </div>
            </Scroll>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        mainData: state.main.maindata
    }

}
const mapStateToDisPatch = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        }
    }
}

export default connect(mapStateToProps, mapStateToDisPatch)(Main)