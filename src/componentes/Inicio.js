import React from 'react'
import Imagen from '../assets/miimg.jpg';

export const Inicio = () => {
    return (
        <>
          <div className="personal" style={{display: `flex` , alignItems:`center`, justifyContent:`center`,textAlign:`center`  }}>
                <div style={{ marginLeft:`60px` }}>
                    <img style={{ width:`300px`, borderRadius:`100%` }} className='img' alt="img1" src={Imagen} />
                </div>
                <div className='container'>
                    <h1>Hola</h1>
                    <p>Mi nombre es Andrés, me dedico al desarrollo de Software y estoy para ayudarte en lo que pueda para lo que necesites.</p>
                    <p>En este lugar encontraras todo lo referente a mi experiencia profesional en el rubro de la informática y 
                        otros cursos y conocimientos extra que he ido adquiriendo al paso de los años. </p>
                        <p>Sin más que añadir, espero que la información te sea de utilidad para lo que estas buscando. ✌🏽</p>
                </div>
            </div>
        </>
    );
}
export default Inicio;