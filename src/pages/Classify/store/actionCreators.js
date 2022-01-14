import * as actionTypes from './constants'
import { reqclassify } from "@/api"


export const changeClassifyPageData = (data) => {
   return {  
       type: actionTypes.CHANGE_CLASSIFY_PAGEDATA,
       data
   }
}

export const getClassifyPageData = () => {
    return (dispatch) => {
        reqclassify()
            .then(res => {
                dispatch(changeClassifyPageData(res.data.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
} 