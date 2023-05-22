import axios from 'axios'
import{
    GET_PROFESORES,
    GET_PROFESORES_OK,
    GET_PROFESORES_FAIL,
} from './actionTypes'

export function actionGetProfesores(){
    return{
        type: GET_PROFESORES
    }
}

export function actionGetProfesores_Ok(profesores){
    return{
        type: GET_PROFESORES_OK,
        payload: profesores
    }
}

export function actionGetProfesores_Fail(error){
    return{
        type: GET_PROFESORES_FAIL,
        payload: error
    }
}

export function getProfesores(){
    return async (dispatch) =>{
        dispatch(actionGetProfesores())
        try{
            const result = await axios.get("https://back-vercel-ou9o3du9k-reawchell.vercel.app/profesores")
            dispatch(actionGetProfesores_Ok(result.data))
        }catch (error) {
            dispatch(actionGetProfesores_Fail(error))

        }
    }
}