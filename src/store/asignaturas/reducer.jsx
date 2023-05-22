import {
    GET_ASIGNATURA,
    GET_ASIGNATURA_OK,
    GET_ASIGNATURA_FAIL,

    DELETE_ASIGNATURA,
    DELETE_ASIGNATURA_OK,
    DELETE_ASIGNATURA_FAIL,
} from './actionTypes'

const INITIAL_STATE = {
    asignatura: []
}

export default function AsignaturaReducer(state = INITIAL_STATE, action){
    const copia = {...state}
    switch(action.type){
        case GET_ASIGNATURA:
        break


        case GET_ASIGNATURA_OK:  
            copia.asignatura = action.payload
        break  


        case GET_ASIGNATURA_FAIL:
            copia.asignatura = []
        break
        case DELETE_ASIGNATURA:
        break

        case DELETE_ASIGNATURA_OK:
            copia.asignatura = copia.asignatura.filter(x=>x._id !== action.payload)
        break
        
        case DELETE_ASIGNATURA_FAIL:
        break    
    }

    return copia
}
