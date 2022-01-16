import React from "react"
import { useHistory } from "react-router-dom"
import './menuBar_Top.css'

const MenuBarTop_List = (props) => {
    const { menuBarData=[], menuBarFixed } = props
    const history = useHistory()
    const goToClassify = (type) => {
        history.push(`/home/classify/${type}`)
    }
    return (
        <div className={menuBarFixed?"menuBar menuBar-fixed":"menuBar"}>
               <div>
                   <div className="menuBar__container">
                   {
                       menuBarData.map(item => 
                           <div className="menuBar__item" key={item.type} onClick={() => goToClassify(item.type)}>
                               <img src={item.picUrl} />
                               <div className="menuBar__item__desc">{item.title}</div>
                           </div>
                       )
                   }
                    </div>
               </div>
        </div>
    )
}

export default MenuBarTop_List