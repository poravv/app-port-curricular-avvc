import { React } from "react";
import { Container } from "react-bootstrap";
import '../App.css';
import imagen2 from '../assets/programacion3.png';



const SobreMi = () => {
    return (
        <section>
            <div className="personal">
                <Container>
                    <h4>Me dedico al análisis y desarrollador de Software</h4>
                    <p>
                        Personal y profesionalmente hablando busco siempre aumentar mi base de
                        conocimientos y experiencias poniendo en práctica las habilidades que voy
                        adquiriendo. Crecer personal y profesionalmente aprendiendo y enseñando.
                    </p>
                    <p>
                        Me considero una persona bastante sociable con facilidad de comunicación y alta
                        tolerancia a la presión, lo que considero me permite pensar en frio las soluciones
                        más óptimas para cualquier problemática.
                    </p>
                    <p>
                        Actualmente me encuentro realizando trabajos para una empresa, sin embargo también cumplo labores como desarrollador independiente para personas o empresas
                    </p>
                    <p>
                        Resido hoy en día en la ciudad de Capiatá - Paraguay
                    </p>
                </Container>

                
                    <div style={{ margin:`30px`}}>
                        <img style={{ width:`300px` }} className='img' alt="img1" src={imagen2} />
                    </div>
                
            </div>
            <br />
        </section>
    );
}

export default SobreMi;