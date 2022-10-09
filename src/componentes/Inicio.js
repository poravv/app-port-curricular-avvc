import React from 'react'
import { Container } from "react-bootstrap";
import Imagen from '../assets/programacion3.png';

export const Inicio = () => {
    return (
        <section>
            <div className="personal">
                <Container>
                    <h1>Bienvenido a mi sitio</h1>
                    <p>Aqui encontraras todo lo relacionado con mi experiencia profesional en el rubro de 
                        la informatica y otros cursos y conocimientos extra que eh ido adquiriendo al paso 
                        de los años. Sin mas que decir, espero la información te sea de utilidad para lo 
                        que estas buscando</p>
                        <p style={{fontweight: `bold`}}>
                        Andrés Valentin Vera Chavez
                        </p>
                </Container>
                <Container>
                    <img alt="img1" src={Imagen} />
                </Container>
            </div>
        </section>
    )
}
export default Inicio;