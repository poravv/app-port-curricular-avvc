
import MyCard from '../componentes/card/MyCard';

function Experiencias() {

    const listaExperiencias = [ 
        {
            titulo:"One S.R.L",
            adicional:"Marzo 2015-Hasta la fecha",
            contenido:`Servicios Informáticos - Hardware y Software
            Proyectos: Migración de base de datos OnDemand. Depuración de datos, E-Kuatia.`,
            lista:`-Participación en tareas de Relevamiento de Datos
            -Diseño Lógico y Físico de Sistemas.
            -Control de Calidad del Producto Final.
            -Capacitación a Desarrolladores.
            -Documentación técnica y de usuario.
            -Sistema de Gestión One.`,
        },
        {
            titulo:"Universidad Autónoma San Sebastián de San Lorenzo",
            adicional:"Junio 2019 – diciembre 2021",
            contenido:`Educación Universitaria
            Docente de Informática Empresarial`
        },
        {
            titulo:"Freelancer",
            adicional:"2020 - Hasta la fecha",
            contenido:`Desarrollo de Apps y sistemas web`,
            lista: `-Elaboración de Diagrama entidad relación
            -Configuración de servidores de base de datos privado con ip publica
            -Desarrollo de Servicios Rest con NodeJs, ORM Sequelize y base de datos MYSQL
            -Vinculación de trabajos a sistema de versiones Git (Github)
            -Desarrollo de Apps Móviles con lenguaje Dart y SDK Flutter de Google para android y/o iOs
            -Desarrollo de Aplicaciones FrontEnd con Framework ReactJs y AntDesigne`

        }
    ];

    return (
        <section>
            <h1 style={{display: `flex`, justifyContent: `center`,margin:`30px` }}>Experiencias</h1>
            <div className="container d-flex justify-content-center">
            <div className="column">
                <div className="row-md-4">
                    {
                        listaExperiencias.map((experiencia) => {
                            return <MyCard titulo={experiencia.titulo} lista={experiencia.lista} adicional={experiencia.adicional} contenido={experiencia.contenido} />
                        })
                    }
                </div>
            </div>
        </div>
        </section>
    );
}

export default Experiencias;