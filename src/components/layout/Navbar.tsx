import '/Users/asiermunoz/Documents/personal-portfolio/src/styles/Navbar.css'
import { scrollToSection } from '../../utils/scroll';

function Navbar() {
    return (
        <nav className='nav-bar'>
            <button className='nav-button' onClick={() => scrollToSection('home')}> Home</button>
            <button className='nav-button' onClick={() => scrollToSection('experience')}> Experience</button>
            <button className='nav-button' onClick={() => scrollToSection('about')}> About</button>
            <button className='nav-button' onClick={() => scrollToSection('contact')}> Contact</button>
        </nav>
    )

}

export default Navbar