import '../../styles/Home.css'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ProjectCard from '../home/ProjectCard'
import About from '../home/About'
import Experience from '../home/Experience'
import Intro from '../home/Intro'

import WeatherApp from '../../assets/WeatherApp.avif'
import CPUSim from '../../assets/CPU_Simulator.avif'
import Cooking_Simulator from '../../assets/Cooking_Simulator.png'
import TasaClara from '../../assets/TasaClara.png'

function Home() {
    return (
        <>
            <Navbar />

            <main className='home-page-content' id='home'>
                <Intro />

                <div className='projects-heading'>
                    <span className='mono-label'>Cartera de proyectos</span>
                    <h2 className='projects-title'>Proyectos</h2>
                </div>
                <div className='project-container'>
                    <ProjectCard
                        code='WTHR'
                        title='Weather App'
                        description='Esta es una app sencilla que permite ver el clima de cualquier ciudad del mundo'
                        link='https://github.com/asiermunoz/WeatherApp'
                        technologies={['HTML', 'JavaScript', 'CSS', 'API']}
                        imageUrl={WeatherApp}
                    />

                    <ProjectCard
                        code='CPU'
                        title='CPU Simulator'
                        description='Simulador de algoritmos de planificacion de la CPU'
                        link='https://github.com/asiermunoz/Simulador-de-CPU'
                        technologies={['Python', 'Django']}
                        imageUrl={CPUSim}
                    />
                    <ProjectCard
                        code='ARPS'
                        title='Cooking Simulator'
                        description='Juego que simula una estación de comida (Arepas)'
                        link='https://github.com/ucab-pow-202615/26998-pomc'
                        technologies={['HTML', 'JavaScript', 'CSS', 'API']}
                        imageUrl={Cooking_Simulator}
                    />
                    <ProjectCard
                        code='VES'
                        title='TasaClara'
                        description='Tasas de cambio en Venezuela'
                        link='https://github.com/asiermunoz/tasaclara'
                        technologies={['express', 'cron-job', 'Vite', 'Ts', 'React', 'Vercel', 'Render', 'Neon']}
                        imageUrl={TasaClara}
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
                                `Creamos un asistente virtual basado en inteligencia artificial para personas en busca de empleo llamado Emiliana.ai.
                                - Formé parte del equipo que creó la marca (nombre, eslogan, colores, tipografía, diseño del sitio web y presencia en redes sociales).
                                - Participé en la investigación y el desarrollo de la inteligencia artificial y creé las indicaciones correspondientes para cada función.
                                - Fui responsable de la comunicación entre los jefes de los equipos de desarrollo y comunicaciones, con el fin de garantizar una mejor comprensión de la herramienta y un trabajo más eficaz.
                                - Supervisé las funcionalidades del asistente, realizando una serie de pruebas para  garantizar que se cumplían todas las características definidas.
                                - Desarrollé e investigué diferentes formas de lograr el rastreo y el scraping web de la manera más eficaz.`,
                            linkUrl: 'https://humanet.com'
                        },

                        {
                            role: 'Automation Project Engineer',
                            company: 'Progracademy',
                            time: 'mar 2026 - aug 2026',
                            description:
                                `- Diseñé, planifiqué y desarrollé, junto con un compañero de equipo, un sistema de automatización para gestionar 375 sesiones semanales de tutoría, eliminando así la necesidad de realizar tareas manualmente.

- Evalué alternativas de arquitectura y migración (incluido un backend de Node.js con arquitectura hexagonal) para garantizar la escalabilidad a largo plazo y la calidad técnica de la solución.

- Implementé un sistema de evaluación de tutores basado en IA y la generación automática de informes en PDF, con envío automático por correo electrónico a las partes interesadas.

- Trabajé a distancia en un entorno ágil junto con mi compañero de desarrollo, perfeccionando la solución en función de los comentarios directos de los supervisores del proyecto.`,
                            linkUrl: 'https://progracademy.com'
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