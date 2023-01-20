
import MyCardSimple from './card/MyCardSimple';
import '../CSS/MyCardSimple.css'

function Capacitaciones() {

    const listaCapacitaciones = [
        {
            contenido: "Taller de Capacitación sobre VIH/ Sida Cuerpo de Paz y Cruz Roja - (2008)",
        },
        {
            contenido: "Curso Taller de liderazgo “Lideres del Mañana”- Cuerpo de Paz - (2008)",
        },
        {
            contenido: "Charla Formación Básica Institucional - Cruz Roja Paraguaya - (2009)",
        },
        {
            contenido: "Seminario Taller Gestión Administrativa Contable Paraguay - (2010)",
        }
        ,
        {
            contenido: "Taller Principios Fundamentales y Emblema-Cruz Roja Paraguaya - (2010)",
        },
        {
            contenido: "Curso Primeros Auxilios básicos Cruz Roja Paraguaya - (2012)",
        },
        {
            contenido: "VI Seminario Innovación Tecnológica Informática Cooperativa Capiata - (2012)",
        },
        {
            contenido: "Curso Teórico Práctico - Manejo de Incendios Forestales - (2013)",
        },
        {
            contenido: "PPP (Preparación y Planificación para proyectos) Cruz Roja Paraguaya - (2013)",
        },
        {
            contenido: "Taller Salud y Primeros Auxilios Comunitario Cruz Roja Paraguaya - (2013)",
        },
        {
            contenido: "Foro Actualización Curricular UTIC - (2014)",
        },
        {
            contenido: "Curso AVC (Análisis en Vulnerabilidades y Capacidades) y Caja de herramientas con Perspectiva de Género y Juventud- Cruz Roja - (2014)",
        },
        {
            contenido: "Estrategia 2020 (Plataforma Online F.I.C.R) “Federación Internacional de la Cruz Roja y la Media Luna Roja” - (2014)",
        },
        {
            contenido: "Curso StaySafe- Seguridad Personal (Plataforma Online F.I.C.R) - (2014) “Federación Internacional de la Cruz Roja y la Media Luna Roja” - (2014)",
        },
        {
            contenido: "Electricidad Básica en el SNPP- San Lorenzo - (2014)",
        },
        {
            contenido: "Charla Educación Vial-Cruz Roja Paraguaya Sub-Filial Capiatá - (2014)",
        },
        {
            contenido: "Charla Mitos de la Alimentación-Cruz Roja - (2014)",
        },
        {
            contenido: "Charla de actualización de Primeros Auxilios – Cruz Roja Paraguaya - (2015)",
        },
        {
            contenido: "Curso de OFCOE (Organización y Funcionamiento de Centros de Operaciones de Emergencias)- Cruz Roja Paraguaya y CREPD (Centro de Referencia en Preparación Institucional para Desastres de la FICR)- (2015)",
        },
        {
            contenido: "Curso de Reparación y Mantenimiento de Celulares con el ISI (Centro de Formación y Capacitación Laboral) y la SINAFOCAL. (2015)",
        },
        {
            contenido: "Seminario Sobre Delitos Informáticos de la Universidad Tecnológica Intercontinental- UTIC. (2015)",
        },
        {
            contenido: "Curso Básico de Marketing Digital – IAB (Interactive Advertising Bureau) & Google Actívate (2018)",
        },
        {
            contenido: "Curso de Desarrollo de Apps Móviles –Universidad Complutense de Madrid & Google Activate(2018)",
        },
        {
            contenido: "Curso Scrum LinkedIn Learning (2022)",
        },
        {
            contenido: "Fundamentos del desarrollo web: Full Stack o Front-end  LinkedIn Learning (2022)",
        },
        {
            contenido: "JavaScript - LinkedIn Learning (2022)",
        },

    ];

    return (
        <>
            <section>
                <h1 style={{ display: `flex`, justifyContent: `center`,margin:`30px` }}>Capacitaciones</h1>
                {
                    listaCapacitaciones.map((experiencia) => {
                        return <MyCardSimple contenido={experiencia.contenido} />
                    })
                }
            </section>
        </>
    );
}

export default Capacitaciones;