import React, { useState } from 'react';
import Header from '../shared/Header';

function Contact() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');
  
  const handleDropdownChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <>
    <Header/>

    <div>

    <h1>Selecciona una opción:</h1>
    <select value={opcionSeleccionada} onChange={handleDropdownChange}>
      <option value="opcion1">Donde estamos?</option>
      <option value="opcion2">Quieres reservar?</option>
      <option value="opcion3">Quieres contactarnos?</option>
    </select>

    <div>
      {opcionSeleccionada === 'opcion1' && (
        <div>
          {/* Coloca la estructura que desees para la Opción 1 */}
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.4106146058652!2d2.1596272760596125!3d41.38688827129993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a38ac883c4d7%3A0x5fad8c0e05482018!2sMILES%20Cocktail%20Bar!5e0!3m2!1ses!2ses!4v1694861333413!5m2!1ses!2ses"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'></iframe>
        </div>
      )}
      {opcionSeleccionada === 'opcion2' && (
        <div>
          {/* Coloca la estructura que desees para la Opción 2 */}
          <h2 className='reservas'>
            Reservas!
          </h2>
        </div>
      )}
      {opcionSeleccionada === 'opcion3' && (
        <div>
          {/* Coloca la estructura que desees para la Opción 3 */}
          <h2 className='reservas'>Contactanos mediante nuestras redes! </h2>
        </div>
      )}
    </div>
    </div>
        </>

      );
};

export default Contact;
