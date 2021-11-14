import react,{useState} from "react";

const Temperatura = () => {

    const [Temperatura, setTemperatura] =useState(19)
    const Subir =()=>{
        setTemperatura(Temperatura+1)

    }
     const Bajar =()=>{
        setTemperatura(Temperatura-1)
        
    }


    return(

        <div>
            <h2>La Temperatura es: {Temperatura}</h2>
            <p>
                {
                    Temperatura > 21 ? 'Hace Calorcito' : 'Hace Fresquito'

                }

            </p>
            <button onClick={Subir}>Aumentar Temperatura</button>
            
            <button onClick={Bajar}>Reducir Temperatura</button>
        </div>



)

}
export default Temperatura