
import Whatsapp from '../assets/what.png';
import Ig from '../assets/ig.webp';

function Footer() {
    return (
        <>
            <footer className="page-footer font-small blue pt-4 bg-secondary">
                <div className="footer-copyright text-center">
                    
                    <p href="/"> © 2022 Copyright: Andrés Vera</p>
                    <p>andyvercha@gmail.com<br/>+595 992 756 462 </p>
                    <a href="https://wa.me/595992756462"><img alt="whatsapp" style={{ height: `3rem` }} src={Whatsapp} /></a>
                    <a href="https://www.instagram.com/_vienecadames_/"><img alt="instagram" style={{ height: `2.3rem` }} src={Ig} /></a>
                    
                </div>
            </footer>
        </>
    );
}
export default Footer