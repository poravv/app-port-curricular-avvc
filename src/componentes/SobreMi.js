import { React } from "react";
import { Container } from "react-bootstrap";
import '../App.css';

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
                        Actualmente me encuentro realizo trabajos para una empresa privada, sin embargo a su vez cumplo labores como desarrollador independiente para personas o empresas
                    </p>
                </Container>
                    <div style={{ margin:`30px`}}>
                        <img style={{ width:`500px`,borderRadius:`10px` }} className='img' alt="img1" src='https://static.wixstatic.com/media/9c808c_32d2e8877a334b3593c7120840168131~mv2.gif' />
                    </div>
            </div>
            <br />
        </section>
    );
}

export default SobreMi;