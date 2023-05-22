import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlumno, getAlumnos } from './store/alumnos/actions'
// import AlumnosReducer from './store/alumnos/reducer'
import { getProfesores } from './store/profesores/actions'
import { deleteAsignatura, getAsignatura } from './store/asignaturas/actions'
import {ColorRing} from 'react-loader-spinner'

function App() {
  const dispatch = useDispatch()
  const { alumnos, loadingAlumnos } = useSelector((state) => state.AlumnosReducer)
  const { profesores } = useSelector((state) => state.ProfesoresReducer)
  const { asignatura } = useSelector((state) => state.AsignaturaReducer)

  useEffect(() => {
    dispatch(getAlumnos())
    dispatch(getProfesores())
    dispatch(getAsignatura())
  }, [])

  return (
    <>
      <h1> Alumnos </h1>
      { loadingAlumnos ?
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
        :
        <ul>
        {alumnos.map((a) => (
          <li key={a._id}>
            <button onClick={() => dispatch(deleteAlumno(a._id))}>x</button>
            {a.nombre}
          </li>
        ))}
      </ul>

      }
      
      <hr />
      <h1> Profesores </h1>
      <ul>
        {profesores.map((p) => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
      <hr />
      <h1> Asignatura</h1>
      <ul>
        {asignatura.map((a) => (
          <li key={a._id}>
            <button onClick={() => dispatch(deleteAsignatura(a._id))}>x</button>
            {a.nombre}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
