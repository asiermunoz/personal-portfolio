import '../../styles/Home.css'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ProjectCard from '../home/ProjectCard'
import About from '../home/About'
import Experience from '../home/Experience'
import foto from '../../assets/playpal.png'
import Intro from '../home/Intro'

function Home() {
    return (
        <>
            <Navbar />

            <main className='home-page-content' id='home'>
                <Intro />

                <span className='projects-title'>
                    <span className='material-symbols-outlined projects-icon'>construction</span>
                    Proyectos
                </span>
                <div className='project-container'>
                    <ProjectCard
                        title='PlayPal'
                        description='esto es una aplicacion que permite a los usuarios reservar canchas de futbol en cualquier lugar de venezuela'
                        link='https://github.com/carlosega19/PlayPal'
                        technologies={['react', 'node', 'mongodb', 'springboot']}
                        imageUrl={foto}
                    />
                </div>

                <Experience
                    title='Experiencia laboral'
                    items={[
                        {
                            role: 'Pasante de Ingenieria',
                            company: 'Humanet',
                            time: 'jul 2025 - nov 2025',
                            description:
                                'Creamos un asistente virtual basado en inteligencia artificial para personas en busca de empleo llamado Emiliana.ai. Formé parte del equipo que creó la marca (nombre, eslogan, colores, tipografía, diseño del sitio web y presencia en redes sociales). Participé en la investigación y el desarrollo de la inteligencia artificial y creé las indicaciones correspondientes para cada función. Fui responsable de la comunicación entre los jefes de los equipos de desarrollo y comunicaciones, con el fin de garantizar una mejor comprensión de la herramienta y un trabajo más eficaz. Supervisé las funcionalidades del asistente, realizando una serie de pruebas para garantizar que se cumplían todas las características definidas. Desarrollé e investigué diferentes formas de lograr el rastreo y el scraping web de la manera más eficaz.',
                            linkUrl: 'https://humanet.com'
                        }
                    ]}
                />

                <About />

            </main>
            <Footer />

        </>

    )

}

export default Home