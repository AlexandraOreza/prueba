import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = "http://localhost:8000/api";
export const CrearNota = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const navigate = useNavigate();

    const create = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/notas`, {
            titulo: titulo,
            contenido: contenido
        })
        navigate('/')
    }

  return (
    <div>
        <h1 className='mt-3'>Crear Nota</h1>
        <form onSubmit={create} className='formulario'>
            <div className='mb-3 mx-5'>
                <label className='form-label'>Titulo</label>
                <input 
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    type='text'
                    required
                    className='form-control'></input>
            </div>
            <div className='mb-3 mx-5'>
                <label className='form-label'>Contenido</label>
                <input 
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    type='text'
                    maxLength={200}
                    className='form-control'></input>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'>Crear</button>
            </div>
        </form>
    </div>
  )
};
export default CrearNota;