/*para evitar el uso excesivo de div, se coloca en el import de React, Fragment*/
import React, {Fragment} from 'react';

function Hola(){
return(
    /*Fragment hace que no se use tanto div
    ya que por defecto, sin el, se usaria en exceso el div*/
    <Fragment>
        <h2>Primer componente Hola</h2>

    </Fragment>
);
}
export default Hola