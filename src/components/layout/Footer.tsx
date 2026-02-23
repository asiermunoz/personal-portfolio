import '../../styles/Footer.css'
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

//PENDING: Add links for social media
function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <span>&copy; 2026 Asier Munoz. Todos los derechos reservados</span>
                <div className="social-links">
                    <a href="tel:+584126119469" className="social-link" aria-label="Teléfono">
                        <FaPhone /> +58 412 6119469
                    </a>
                    <a href="https://linkedin.com/in/asier-munoz" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/asiermunoz" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <FaGithub /> GitHub
                    </a>
                    <a href="mailto:asiermunozlandi@gmail.com" className="social-link" aria-label="Correo">
                        <FaEnvelope /> asiermunozlandi@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer