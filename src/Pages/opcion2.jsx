import './contact.css'
import React from 'react'
import partidoMundial from '../Img/partidoMundial.jpg'
import FaceSvg from '../Img/facebook.svg'
import wsp from '../Img/wsp.svg'
import phone from '../Img/phone.svg'


function Opcion2() {

    return (
    <>         
    <div>

        <h2 className='reservas'>Reservas!</h2>

         <div class="contenedor">
            <img className='partido' src={partidoMundial}></img>
            <div class="recuadro">
            <p>Contactanos por donde <br></br>mas te guste!</p>
            </div>
        </div>
    
        <br></br>
        <br></br>
            
        <a href="https://www.facebook.com/miles.lounge.barcelona"><img src={FaceSvg} className="icono-wsp" alt="Icono WSP"></img></a>

        <a href="https://www.facebook.com/miles.lounge.barcelona"><img src={phone} className="icono-wsp" alt="Icono WSP"></img>932472654</a>

        <a href="https://www.google.com/maps/place/MILES+Cocktail+Bar/@41.3868883,2.1622022,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a38ac883c4d7:0x5fad8c0e05482018!8m2!3d41.3868883!4d2.1622022!16s%2Fg%2F11k3tlj9l0?entry=ttu"><img src={wsp} className="icono-wsp" alt="Icono WSP"></img></a>


    </div>
    </>
  )
}
export default Opcion2;





