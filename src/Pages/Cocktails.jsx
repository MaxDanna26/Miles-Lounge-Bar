import './cocktails.css';
import React from 'react';
import { useState } from 'react';
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Aperol from '../Img/aperol.jpg'
import Negroni from '../Img/negroni.jpg'
import piñaColada from '../Img/piñaColada.jpg'
import mojito from '../Img/mojito.jpg'

function Cocktails() {
  // Definir las imágenes y descripciones
  const images = [
    {
      src: Aperol,
      title: 'Aperol',
      description: 'El Aperol Spritz es un cóctel italiano que se ha vuelto popular en todo el mundo. Se caracteriza por su apariencia vibrante y su sabor refrescante y amargo con toques cítricos. La proporción típica es 3 partes de Prosecco, 2 partes de Aperol y 1 parte de agua con gas o soda, aunque las cantidades pueden variar según el gusto personal.',
    },
    {
      src: Negroni,
      title: 'Negroni',
      description: 'El Negroni es un cóctel clásico que se caracteriza por su equilibrio de sabores y su atractivo color rojo intenso. Este cóctel se originó en Italia, específicamente en Florencia, a principios del siglo XX. Se prepara con tres ingredientes principales en partes iguales: gin, vermut rojo dulce y Campari, un licor amargo y herbal. La combinación de estos tres elementos crea una experiencia de sabor única.',
    },
    {
      src: piñaColada,
      title: 'Piña Colada',
      description:'La Piña Colada es un cóctel exquisitamente tropical que combina ingredientes simples para crear una experiencia de sabor refrescante y deliciosa. Los ingredientes básicos de una Piña Colada son ron blanco, jugo de piña y crema de coco, y la bebida se mezcla con hielo para lograr una textura cremosa y suave.' ,
    },    
    {
      src: mojito,
      title: 'Mojito',
      description:'El Mojito es un cóctel refrescante y tropical originario de Cuba, que se ha convertido en una bebida icónica a nivel internacional. Los ingredientes clave para preparar un Mojito incluyen ron blanco, azúcar, jugo de limón fresco, hojas de menta fresca,soda y hielo.' ,
    },
  ];

  // Estado para controlar la imagen actual
  const [currentImage, setCurrentImage] = useState(0);

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>         
    <Header/>


      <div className="image-container">

        <img src={images[currentImage].src} alt={images[currentImage].description} />
      </div>

      <div className="navigation">

            <button onClick={prevImage}>Anterior</button>
            <button onClick={nextImage}>Siguiente</button>

        </div>
      
      <div className='textoCoctail'>

        <div className="title">{images[currentImage].title}</div>

        <div className="description">{images[currentImage].description}</div>

      </div>



    <Footer/>

    </>
  );
};

export default Cocktails;
