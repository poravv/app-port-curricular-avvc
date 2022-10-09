import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//Importamos componentes creados
import Inicio from '../componentes/Inicio';
import SobreMi from '../componentes/SobreMi';
import Experiencias from '../componentes/Experiencias';
import Contactos from '../componentes/Contactos';
import Estudios from '../componentes/Estudios';
import Capacitaciones from '../componentes/Capacitaciones';
import Conocimientos from '../componentes/Conocimientos';
import Navbar from '../layouts/NavBar';


function NavigatorBar() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} >
            <Route index element={<Inicio />} />
            <Route path='SobreMi' element={<SobreMi />} />
            <Route path='Experiencias' element={<Experiencias />} />
            <Route path='Conocimientos' element={<Conocimientos />} />
            <Route path='Estudios' element={<Estudios />} />
            <Route path='Capacitaciones' element={<Capacitaciones />} />
            <Route path='Contactos' element={<Contactos />} />

            <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default NavigatorBar;
