import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const endpoint = "http://localhost:8000/api";
export const VerNotas = () => {
  const [notas, setNotas] = useState([]);
  useEffect(() => { 
    getNotas()
  }, [])

  const getNotas = async () =>{
    const response = await axios.get(`${endpoint}/notas`)
    setNotas(response.data)
  }

  return (
  <div className="mx-5">
    <Link to={"/crear"} className="btn btn-primary mt-4 mb-2">Nueva nota</Link>
    <table className="table table-striped">
        <thead>
            <th style={{width: "30%"}}>titulo</th>
            <th style={{width: "30%"}}>contenido</th>
        </thead>
       <tbody>
        { notas.map ((nota) => (
            <tr key={nota.id} >
                <td>{nota.titulo}</td>
                <td>{nota.contenido}</td>
            </tr>
        ))}
        </tbody> 
    </table>
  </div>
)};

export default VerNotas;