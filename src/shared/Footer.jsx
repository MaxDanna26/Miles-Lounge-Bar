import './footer.css';
import React from 'react'

import InstaSVG from '../Img/insta.svg';
import FaceSvg from '../Img/facebook.svg';
import MapSvg from '../Img/map.svg';


function Footer() {

    return (
    <>          
        <footer>
            <div className="frase-container">
                <p className="frase">Miles Cocktail Bar</p>
            </div>

            <p className='reservas'>No hace falta reservación con antelacion. Para ingresar solo tienes que venir a visitarnos, te estamos esperando.</p>


            <p className='reservas'>Carrer diputació 215 - barcelona</p>
            <p className='reservas'>Horarios:
            <br></br>
            Domingos a Jueves - 18pm a 3am
            <br></br>
            Viernes y sabados - 18pm a 3:30am
            <br></br>
            </p>

             
            <div className="seccion-redes">

    
                <a href="https://www.instagram.com/miles.bar.music/"><img src={InstaSVG}  className="icono-footer" alt="Icono Instagram"></img> </a>
    
                <a href="https://www.facebook.com/miles.lounge.barcelona"><img src={FaceSvg} className="icono-footer" alt="Icono Google Maps"></img></a>
    
                <a href="https://www.google.com/maps/place/MILES+Cocktail+Bar/@41.3868883,2.1622022,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a38ac883c4d7:0x5fad8c0e05482018!8m2!3d41.3868883!4d2.1622022!16s%2Fg%2F11k3tlj9l0?entry=ttu"><img src={MapSvg} className="icono-footer" alt="Icono Facebook"></img></a>
    
            </div>
    
            <p className="copyright">Todos los derechos reservados 2023 &copy;</p>
        </footer>
    </>




  )
}
export default Footer;





