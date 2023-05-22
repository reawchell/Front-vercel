import axios from 'axios'
import {
  GET_ASIGNATURA,
  GET_ASIGNATURA_OK,
  GET_ASIGNATURA_FAIL,
  DELETE_ASIGNATURA,
  DELETE_ASIGNATURA_OK,
  DELETE_ASIGNATURA_FAIL
} from "./actionTypes"

export function actionGetAsignaturaOk(asignatura) {
  return {
    type: GET_ASIGNATURA_OK,
    payload: asignatura
  }
}

export function actionGetAsignaturaFail(error) {
  return {
    type: GET_ASIGNATURA_FAIL,
    payload: error
  }
}

export function actionGetAsignatura() {
  return {
    type: GET_ASIGNATURA
  }
}

export function getAsignatura() {
  return async (dispatch) => {
    dispatch(actionGetAsignatura())
    try {
      const response = await axios.get("http://localhost:4000/asignatura")
      dispatch(actionGetAsignaturaOk(response.data))
    } catch (error) {
      dispatch(actionGetAsignaturaFail(error))
    }
  }
}

export function actionDeleteAsignatura(id) {
  return {
    type: DELETE_ASIGNATURA,
    payload: id,
  }
}

export function actionDeleteAsignaturaOk(id) {
  return {
    type: DELETE_ASIGNATURA_OK,
    payload: id
  }
}

export function actionDeleteAsignaturaFail(error) {
  return {
    type: DELETE_ASIGNATURA_FAIL,
    payload: error
  }
}

export function deleteAsignatura(id) {
  return async (dispatch) => {
    dispatch(actionDeleteAsignatura(id))
    try {
      const response = await axios.delete(`https://back-vercel-ou9o3du9k-reawchell.vercel.app/asignatura/${id}`)
      dispatch(actionDeleteAsignaturaOk(id))
    } catch (error) {
      dispatch(actionDeleteAsignaturaFail(error))
    }
  }
}