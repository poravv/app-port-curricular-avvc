import { React } from "react";
import { Container } from "react-bootstrap";
import '../App.css';
import imagen2 from '../assets/persona.png';



const SobreMi = () => {
    return (
        <section>
            <div className="personal">
                <Container>
                        <h4>Me dedico al analisis y desarrollador de Software</h4>
                        <p>
                            Personal y profesionalmente hablando busco siempre aumentar 
                            mi base de conocimientos y experiencias poniendo en práctica las
                            habilidades que voy adquiriendo. Crecer personal y
                            profesionalmente aprendiendo y enseñando.
                        </p>
                        
                        <p>
                            Me considero una persona bastante sociable con facilidad de 
                            comunicacion y alta tolerancia a la presion, lo que considero 
                            me permite pensar en frio las soluciones 
                            mas optimas para cualquier problematica.
                        </p>
                    </Container>

                    <div className='container'>
                    <img className='img' alt="img1" src={imagen2} />
                </div>
            </div>
            <br/>
        </section>
    );
}

export default SobreMi;