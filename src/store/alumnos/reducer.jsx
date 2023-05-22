import {
    GET_ALUMNOS,
    GET_ALUMNOS_OK,
    GET_ALUMNOS_FAIL,
    DELETE_ALUMNO,
    DELETE_ALUMNO_OK,
    DELETE_ALUMNO_FAIL
  } from "./actionTypes";
  

const INITIAL_STATE = {
    alumnos: [],
    loadingAlumnos: false,
}

export default function AlumnosReducer(state = INITIAL_STATE, action){
    const copia = {...state}

    switch(action.type){
        case GET_ALUMNOS:
            copia.loadingAlumnos = true


        break

        case GET_ALUMNOS_FAIL:
            copia.alumnos = []
            copia.loadingAlumnos = false

        break

        case    GET_ALUMNOS_OK:
            copia.alumnos = action.payload
            copia.loadingAlumnos = false

        break
        
        case DELETE_ALUMNO:
        break

        case DELETE_ALUMNO_OK:
            copia.alumnos = copia.alumnos.filter(x=>x._id !== action.payload)
        break
        
        case DELETE_ALUMNO_FAIL:
        break    
    }

    return copia
}
