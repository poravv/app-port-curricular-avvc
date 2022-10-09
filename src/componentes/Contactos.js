import contacto from '../assets/contacto.png';

const Contactos = () => {
    return (
        <>
            <section >
            <h1 style={{display: `flex`, justifyContent: `center` }}>Contactos</h1>
            <div style={{ minHeight:`150px` }} className='container'>
                    <img  style={{ width:`100px` }} className='img' alt="img1" src={contacto} />
                </div>
            </section>
        </>
    );
}

export default Contactos;