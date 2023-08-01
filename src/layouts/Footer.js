
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub,IoCallOutline,IoMailOpen } from 'react-icons/io5';


function Footer() {
    return (
        <section >
            <div className='footer' style={{ height: `210px` }}>
                <br/>
                <p>andyvercha@gmail.com<br />+595 992 756 462 </p>
                <div className='myfooter'>
                    <a href="https://wa.me/595992756462" target='_black' ><h1><IoLogoWhatsapp className='iconos' /></h1></a>
                    <a href="https://www.instagram.com/_vienecadames_/" target='_black'><h1><IoLogoInstagram className='iconos' /></h1></a>
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-valentin-vera-chavez-b3baa6188/" target='_black'><h1><IoLogoLinkedin className='iconos' /></h1></a>
                    <a href="https://github.com/poravv" target='_black'><h1><IoLogoGithub className='iconos' /></h1></a>
                    <a href="tel:+595992756462" target='_black'><h1><IoCallOutline className='iconos' /></h1></a>
                    <a href="mailto:andyvercha@gmail.com" target='_black'><h1><IoMailOpen className='iconos' /></h1></a>
                </div>
                <p href="/">  <b>© 2022 Copyright</b> </p>
            </div>
        </section>
    );
}
export default Footer