import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = "http://localhost:8000/api";
export const CrearNota = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [errores, setErrores] = useState({});
    const navigate = useNavigate();

    const create = async (e) => {
        e.preventDefault()
        let newErrores = {}
        if(!titulo.trim()) newErrores.titulo = "Titulo obligatorio"
        if (contenido.length > 200) newErrores.contenido = "El contenido no puede superar los 200 caracteres."

        if (Object.keys(newErrores).length > 0) {
            setErrores(newErrores);
            return;
        }
        try {
        await axios.post(`${endpoint}/notas`, {
            titulo: titulo,
            contenido: contenido
        })
        setErrores({});
        navigate('/')
    
    } catch (error){
            console.error("Error en creacion de nota:", error);
            setErrores({ general: "Hubo un problema al guardar la nota." });
        }
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
                    {errores.titulo && <p className="text-danger">{errores.titulo}</p>}
            </div>
            <div className='mb-3 mx-5'>
                <label className='form-label'>Contenido</label>
                <textarea 
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    type='text'
                    maxLength={200}
                    rows={6}
                    className='form-control'></textarea>
                    <small>{contenido.length} / 200 caracteres</small>
                    {errores.contenido && <p className="text-danger">{errores.contenido}</p>}
            </div>
            {errores.general && <p className="text-danger">{errores.general}</p>}
            <div>
                <button type='submit' className='btn btn-primary'>Crear</button>
            </div>
        </form>
    </div>
  )
};
export default CrearNota;