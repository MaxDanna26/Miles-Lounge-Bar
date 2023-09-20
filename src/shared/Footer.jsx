import './footer.css';
import React from 'react'


import SeccionRedes from './seccionRedes';


function Footer() {

    return (
    <>          
        <footer>
            <div className="frase-container">
                <p className="frase">Miles Cocktail Bar</p>
            </div>

            
            <p className='reservas'>Carrer diputació 215 - barcelona</p>

            <p className='reservas'>No hace falta reservación con antelacion. Para ingresar solo tienes que venir a visitarnos, te estamos esperando.</p>


            <p className='reservas'>Horarios:
            <br></br>
            Domingos a Jueves - 18pm a 3am
            <br></br>
            Viernes y sabados - 18pm a 3:30am
            </p>

            <SeccionRedes/>
    
            <p className="copyright">Todos los derechos reservados 2023 &copy;</p>
        </footer>
    </>




  )
}
export default Footer;





