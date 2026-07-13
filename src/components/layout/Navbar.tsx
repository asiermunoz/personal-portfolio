import '../../styles/Navbar.css'
import { scrollToSection } from '../../utils/scroll';

function Navbar() {
    return (
        <nav className='nav-bar'>
            <button className='nav-brand' onClick={() => scrollToSection('home')} aria-label='Ir al inicio'>
                AM<span className='nav-brand-dot'>.</span>
            </button>
            <div className='nav-links'>
                <button className='nav-button' onClick={() => scrollToSection('home')}>Inicio</button>
                <button className='nav-button' onClick={() => scrollToSection('experience')}>Experiencia</button>
                <button className='nav-button' onClick={() => scrollToSection('about')}>Sobre mí</button>
                <button className='nav-button' onClick={() => scrollToSection('contact')}>Contacto</button>
            </div>
        </nav>
    )

}

export default Navbar