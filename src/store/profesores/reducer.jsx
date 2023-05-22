import{
    GET_PROFESORES,
    GET_PROFESORES_OK,
    GET_PROFESORES_FAIL,
} from './actionTypes'

const INITIAL_STATE = {
    profesores: []
}

export default function ProfesoresReducer(state = INITIAL_STATE, action){
    const copia = {...state}

    switch(action.type){
        case GET_PROFESORES:
            break
            
            case GET_PROFESORES_OK:
                copia.profesores = action.payload
            break
            
            case GET_PROFESORES_FAIL:
                copia.profesores = []
            break    
    }
    return copia
}