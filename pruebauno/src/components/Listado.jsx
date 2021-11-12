import React, {Fragment, useState} from 'react'


const Listado = () =>{

    const [numeros, setNumeros] = useState(['marco','marcano','campos','antonio','edad','perro'])

        return(

        <Fragment>
            <ul>
                {
                    numeros.map ((item, index) =>
                    
                        <li>
                            {item}-{index}
                        </li>
                    )

                }
            </ul>
        </Fragment>

        )

}
export default Listado