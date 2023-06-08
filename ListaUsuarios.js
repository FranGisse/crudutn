import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
import axios from'axios'

function ListaUsuarios(){
    const[ datausuarios, setDataUsuario]=useState([]);
    useEffect(()=>{
        axios.get('api/usuario/infoCompleta').then(res =>{
            console.log(res.data)
            setDataUsuario(res.data)
         }).catch(err =>{
            console.log(err)
         })
    },[])
    
        return(
            <div>
                 <h2>Lista de usuarios</h2>
             { datausuarios.map((usuario)=> {return <UsuarioIndividual key={usuario._id} usuario={usuario}/> })}
            </div>
        )
    } 
   
export default ListaUsuarios;