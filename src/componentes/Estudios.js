
import MyCard from './card/MyCard';

function Estudios() {

    const listaEstudios = [ 
        {
            titulo:"Ingeniería en Sistemas Informáticos",
            adicional:"2021-cursando",
            contenido:`Universidad Tecnológica Intercontinental (UTIC)`
        },
        {
            titulo:"Licenciatura en Análisis de Sistemas Informáticos",
            adicional:"2013 - 2018",
            contenido:`Universidad Tecnológica Intercontinental (UTIC)`
        },
        {
            titulo:"Bachiller Técnico en Informática",
            adicional:"2010 – 2012",
            contenido:`Centro Educativo Técnico Privado (EducArt)`
        },
        
        
    ];

    return (
        <>
        <section>
        <h1 style={{display: `flex`, justifyContent: `center`,margin:`30px` }}>Estudios</h1>
            <div className="container d-flex justify-content-center">
            <div className="column">
                <div className="row-md-4">
                    {
                        listaEstudios.map((experiencia) => {
                            return <MyCard titulo={experiencia.titulo} adicional={experiencia.adicional} contenido={experiencia.contenido} />
                        })
                    }
                </div>
            </div>
        </div>
        </section>
        </>
    );
}

export default Estudios;