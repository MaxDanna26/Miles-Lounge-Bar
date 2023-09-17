import React from 'react'
import './home.css' 
import imgCoctelera from "../Img/imgCoctelera.jpg"
import salonGrande from "../Img/salonGrande.jpg"
import sour from "../Img/sour.jpg"
import consolaDj from "../Img/consolaDj.jpg"
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import About from './About'


function Home() {
  return (
    <>          

        <Header />

        <About/>

    <section id='home' className='mainSection'>
    
    <div className='InfoCard'>

        <img className='imgCard' src={imgCoctelera} alt='Imagen de la coctelera'/>
        <div className='InfoText'>
            <h2>Somos profesionales en cocktails!</h2>
            <p>¡Descubre el lugar más vibrante de Barcelona para disfrutar de exquisitos cócteles y una experiencia inolvidable! Bienvenidos a "Miles Lounge Bar", tu refugio de sabores, música y diversion en el corazón de esta increíble ciudad.
            </p>

        </div>
    </div>

    
    <div className='InfoCard'>
        <img className='imgCard' src={sour} alt='Imagen de la coctelera'/>

        <div className='InfoText'>
            <h2>Cócteles de Autor</h2>
            <p> Nuestra carta de cócteles ha sido cuidadosamente diseñada por nuestros talentosos mixólogos para ofrecerte una amplia variedad de bebidas únicas que satisfarán todos los gustos. Desde los clásicos reinventados hasta creaciones exclusivas, cada trago es una obra maestra de sabor.</p>
        </div>

    </div>

    <div className='InfoCard'>

    <img className='imgCard' src={salonGrande} alt='Imagen de la coctelera'/>
        <div className='InfoText'>            
            <h2> Ambiente Sofisticado</h2>
            <p> Sumérgete en un ambiente sofisticado y acogedor donde la iluminación tenue y el sonido de calidad te transportarán a un mundo de elegancia y estilo. Nuestro espacio ha sido decorado con atención a los detalles para que te sientas como en un rincón de lujo en pleno Barcelona.   
            </p>
        </div>

    </div>

    <div className='InfoCard'>

        <img className='imgCard' src={consolaDj} alt='Imagen de la coctelera'/>
        <div className='InfoText'>
            <h2>Eventos Especiales</h2>
            <p> En Miles no faltan los eventos emocionantes. Desde noches de DJ en vivo hasta fiestas temáticas, siempre hay algo emocionante en nuestro calendario que te mantendrá entretenido. </p>


        </div>


    </div>

    </section>

    <Footer />



    </>




  )
}

export default Home;