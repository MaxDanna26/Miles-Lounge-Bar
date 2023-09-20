
import './contact.css';
import React from 'react'
import consolaDj from '../Img/consolaDj.jpg'


function Opcion3() {

    return (
    <>         
          <div>
              <h2 className='reservas'>Eventos de la semana!</h2>

            <div className='reservasContainer'>
              <img src={consolaDj} className='imgEventos'></img>
              <div className='textReservas'>
                <h2>No techno, no party.</h2>
                <p>Todos los viernes y sabados tenemos sesion live set Dj a partir de las 23hs en nuestro querido Miles.</p>
              </div>

            </div>



          </div>
    </>




  )
}
export default Opcion3;





