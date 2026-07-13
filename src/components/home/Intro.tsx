import '../../styles/Intro.css'

const TICKER_ITEMS = [
    'INGENIERÍA DE SOFTWARE',
    'MERCADOS Y FINANZAS',
    'UCAB · VENEZUELA',
    'PRODUCTO Y NEGOCIO',
]

function TickerTrack({ hidden = false }: { hidden?: boolean }) {
    return (
        <div className='ticker-content' aria-hidden={hidden}>
            {TICKER_ITEMS.map((item) => (
                <span className='ticker-item' key={item}>
                    <span className='ticker-mark' aria-hidden='true'>▪</span>
                    {item}
                </span>
            ))}
        </div>
    )
}

function Intro() {
    return (
        <section className='intro-section' aria-label='Introducción'>
            <div className='intro-copy'>
                <span className='intro-eyebrow mono-label'>Portafolio — 2026</span>
                <h1 className='titulo-intro'>Asier Muñoz.</h1>
                <p className='texto-intro'>
                    Estudiante de Ingeniería de Software en la Universidad Católica Andrés Bello (UCAB), donde desarrollo productos full-stack en la intersección entre la ingeniería de software, la inteligencia artificial y los negocios. Me interesan especialmente los productos en los que la tecnología se une a la estrategia empresarial, por lo que, además de mis estudios de ingeniería, también sigo de cerca los mercados financieros, el marketing digital y demás temas que contribuyan a mi crecimiento personal.
                </p>
            </div>

            <div className='ticker-strip' aria-label='Áreas de enfoque'>
                <div className='ticker-track'>
                    <TickerTrack />
                    <TickerTrack hidden />
                </div>
            </div>
        </section>
    )
}

export default Intro
