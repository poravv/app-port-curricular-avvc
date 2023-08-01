
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub, IoCallOutline, IoMailOpen } from 'react-icons/io5';

const Contactos = () => {
    return (
        <section >
            <h1 style={{ display: `flex`, justifyContent: `center`, margin: `20px` }}>Contactos</h1>
            <div style={{ minHeight: `150px` }} className='container'>
                <div className='container'>
                    <p>Toca alguno de los iconos y ponte en contacto...</p>
                    <div className='myfooter'>
                        <a href="https://wa.me/595992756462" target='_black' ><h1><IoLogoWhatsapp className='iconos_contact' /></h1></a>
                        <a href="https://www.instagram.com/_vienecadames_/" target='_black'><h1><IoLogoInstagram className='iconos_contact' /></h1></a>
                        <a href="https://www.linkedin.com/in/andr%C3%A9s-valentin-vera-chavez-b3baa6188/" target='_black'><h1><IoLogoLinkedin className='iconos_contact' /></h1></a>
                        <a href="https://github.com/poravv" target='_black'><h1><IoLogoGithub className='iconos_contact' /></h1></a>
                        <a href="tel:+595992756462" target='_black'><h1><IoCallOutline className='iconos_contact' /></h1></a>
                        <a href="mailto:andyvercha@gmail.com" target='_black'><h1><IoMailOpen className='iconos_contact' /></h1></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contactos;