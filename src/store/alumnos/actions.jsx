import axios from 'axios'
import { GET_ALUMNOS, GET_ALUMNOS_FAIL, GET_ALUMNOS_OK } from "./actionTypes"
import { DELETE_ALUMNO, DELETE_ALUMNO_OK, DELETE_ALUMNO_FAIL } from './actionTypes'

export function actionGetAlumnosOk(alumnos){
    return{
        type: GET_ALUMNOS_OK,
        payload: alumnos
    }
}

export function actionGetAlumnosFail(error){
    return{
        type: GET_ALUMNOS_FAIL,
        payload: error
    }
}

export function actionGetAlumnos(){
    return {
        type: GET_ALUMNOS
    }
}

export function getAlumnos(){
    return async (dispatch)=>{
        dispatch(actionGetAlumnos())
        try{
            const response = await axios.get("http://localhost:4000/alumnos")
            dispatch(actionGetAlumnosOk(response.data))
        }catch (error){
            dispatch(actionGetAlumnosFail(error))
        }
    }
}

//Borrar
export function actionDeleteAlumno(id){
    return{
        type: DELETE_ALUMNO,
        payload: id,
    }
}

export function actionDeleteAlumnoOk(id){
    return{
        type: DELETE_ALUMNO_OK,
        payload: id
    }
}
export function actionDeleteAlumnoFail(error){
    return{
        type: DELETE_ALUMNO_FAIL,
        payload: error
    }
    
}

export function deleteAlumno(id){
    return async (dispatch)=>{
        dispatch(actionDeleteAlumno(id))
        try{
            const response = await axios.delete(`https://back-vercel-ou9o3du9k-reawchell.vercel.ap/alumnos/${id}`)
            dispatch(actionDeleteAlumnoOk(id))
        }catch (error) {
            dispatch(actionDeleteAlumnoFail(error))
        }
    }
}