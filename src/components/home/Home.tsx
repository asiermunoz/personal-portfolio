import '../../styles/Home.css'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ProjectCard from '../home/ProjectCard'
import About from '../home/About'
import Experience from '../home/Experience'
import Intro from '../home/Intro'

import WeatherApp from '../../assets/WeatherApp.avif'
import CPUSim from '../../assets/CPU_Simulator.avif'

function Home() {
    return (
        <>
            <Navbar />

            <main className='home-page-content' id='home'>
                <Intro />

                <h2 className='projects-title'>
                    <span className='material-symbols-outlined projects-icon' aria-hidden='true'>construction</span>
                    Proyectos
                </h2>
                <div className='project-container'>
                    <ProjectCard
                        title='Weather App'
                        description='Esta es una app sencilla que permite ver el clima de cualquier ciudad del mundo'
                        link='https://github.com/asiermunoz/WeatherApp'
                        technologies={['HTML', 'JavaScript', 'CSS', 'API']}
                        imageUrl={WeatherApp}
                    />

                    <ProjectCard
                        title='CPU Simulator'
                        description='Simulador de algoritmos de planificacion de la CPU'
                        link='https://github.com/asiermunoz/Simulador-de-CPU'
                        technologies={['Python', 'Django']}
                        imageUrl={CPUSim}
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