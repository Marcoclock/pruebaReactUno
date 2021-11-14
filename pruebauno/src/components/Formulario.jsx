import react from 'react'

const Formulario =() =>{

    return(

        <div>
            <form className="form-group">
            <input 
            placeholder="Ingrese nombre" 
            className="form-control mb-3" 
            type="text"/>
            <input 
            placeholder="Ingrese apellido" 
            className="form-control mb-3" 
            type="text"/>
            <input 
            className="btn btn-info btn-block" 
            type="submit"/>

            </form>
        </div>

    )
};
export default Formulario