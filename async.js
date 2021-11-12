/*async.js

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(Response => Response.json())
.then( json => console.log(json.usedID))
.catch(e => console.log(e))*/

const obtenerUsuario = async() =>{

try {
    const respuesta =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const datos =await respuesta.json()
    console.log(datos)
}catch{console.log(e)}

}
obtenerUsuario()