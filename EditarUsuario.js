import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function EditarUsuario(){
    const params=useParams()
    const[nombre, setNombre]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')
    useEffect(() => {
    axios.get('http://localhost:5000/api/usuario/obtenerdatausuario',{idusuario:params.idusuario}).then(res=>{
            console.log(res.data[0])
            const datausuario=res.data[0]
            setNombre(datausuario.nombre)
            setEmail(datausuario.email)
            setTelefono(datausuario.telefono)
        })
    },[])
    function editarUsuario(){
    const actualizarUsuario={
    nombre:nombre,
    email:email,
    telefono:telefono,
    idusuario:params.idusuario

    }
    axios.post('http://localhost:5000/api/usuario/actualizausuario',actualizarUsuario)
    .then(res=>{
        console.log(res.data)
        alert(res.data)
    })
    .then(err=>{console.log(err)})
    
    }

    
    return(
        <form className='container'>
        <div className='row'>
          
       <h2 className='mt-4'>Eliminar</h2>
       </div>
       <div className='row'>
       <div className='col-sm-6 offset-3'>
        
           <div className='mb-3'>
               <label htmlFor='nombre' className='form-label'>Nombre</label>
              <input type="text" className='form-control'value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
           </div>
           <div className='mb-3'>
               <label htmlFor='email' className='form-label'>Email</label>
              <input type="email" className='form-control'value={email}onChange={(e)=>{setEmail(e.target.value)}}></input>
           </div>
           <div className='mb-3'>
               <label htmlFor='telefono' className='form-label'>Telefono</label>
              <input type="text" className='form-control'value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
           </div>
           <button onClick={editarUsuario} className='btn btn-success'>Editar usuario</button>
       </div>
     </div>
          
       </form>
       )
   
    }
export default EditarUsuario;