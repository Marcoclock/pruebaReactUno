import react from 'react'
import { useState } from 'react/cjs/react.development';

const Formulario =() =>{

        const [nombre, setNombre] = useState('')
        const [apellido, setApellido] = useState('')
    
        const validar =(event) =>{
            event.preventDefault()
            console.log("boton pulsado")

            if(!nombre.trim()){

                console.log("Nombre vacio")
            }
            if(!apellido.trim()){

                console.log("Apellido vacio")

            }
        
        
        }

        

    return(

        <div className="container">
            <form onSubmit={validar} className="form-group">

            <input 
            placeholder="Ingrese nombre" 
            className="form-control mb-3" 
            type="text"
            onChange={(e)=>{setNombre(e.target.value)}} 
            />

            <input 
            placeholder="Ingrese apellido" 
            className="form-control mb-3" 
            type="text"
            onChange={(e)=>{setApellido(e.target.value)}}/>

            <input 
            className="btn btn-info btn-block" 
            type="submit"/>

            </form>
        </div>

    )
};
export default Formulario