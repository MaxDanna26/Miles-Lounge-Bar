import React, { useState } from 'react';
import Header from '../shared/Header';
import './contact.css'

import Footer from '../shared/Footer.jsx'
import Opcion1 from './Opcion1';
import Opcion2 from './opcion2';
import Opcion3 from './opcion3';

function Contact() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');
  
  const handleDropdownChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <>
    <Header/>

    <div className='boxGeneral'> 
      <div>

      <h1 className='titularContact'>¿Que te interesa saber?</h1>
      <select value={opcionSeleccionada} onChange={handleDropdownChange}>
        <option value="opcion1">¿Donde estamos?</option>
        <option value="opcion2">¿Quieres reservar?</option>
        <option value="opcion3">¿Eventos?</option>
      </select>

      <div>
        {opcionSeleccionada === 'opcion1' && (
          <Opcion1/>
        )}
        {opcionSeleccionada === 'opcion2' && (
          <Opcion2/>
        )}
        {opcionSeleccionada === 'opcion3' && (
          <Opcion3/>
        )}
      </div>
      </div>
    </div>

    <Footer/>
        </>

      );
};

export default Contact;
