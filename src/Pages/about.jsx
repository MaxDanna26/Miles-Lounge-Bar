import './about.css';
import React from 'react'
import imgHeader from '../Img/header3.jpg'
import maniqui from '../Img/maniqui.jpg'

function About() {

    return (
    <>         
        <div className="video-container">
            <img className='maniqui' alt='Maniqui de decoracion del bar' src={maniqui} preload='auto' autoPlay loop></img> 
            <div className="overlay"></div>
        </div>

        <img className='imgHeader' src={imgHeader} alt='Imagen de un cocktail'/>

        <section className='about'>

            <div className='textAbout'>
                <h2>
                    About Miles
                </h2>
                <p>
                Un compañero de dia, un refugio de noche.<br></br> 
                Una alegria de cada dia, el lugar perfecto del año. <br></br>
                Miles es de los bares más vibrante de Barcelona, ubicado en el corazón de esta hermosa ciudad, es tu conductor a nuevos sabores, música y diversion.
                </p>
            </div>
            
        </section>


    </>




  )
}
export default About;





