import {combineReducers} from 'redux'
import AlumnosReducer from './alumnos/reducer'
import ProfesoresReducer from './profesores/reducer'
import AsignaturaReducer from './asignaturas/reducer'

const rootReducer = combineReducers({
    AlumnosReducer,
    ProfesoresReducer,
    AsignaturaReducer

})

export default rootReducer