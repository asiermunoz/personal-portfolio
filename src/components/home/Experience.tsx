import '../../styles/Experience.css'
import type { ExperienceProps, ExperienceItem } from '../../types/experience'

function Experience({ title, items }: ExperienceProps) {
	return (
		<section className='experience-section' id='experience'>
			<div className='experience-heading'>
				<span className='mono-label'>Historial</span>
				<h2 className='experience-title'>{title}</h2>
			</div>

			<div className='experience-grid'>
				{items.map((item: ExperienceItem, index: number) => (
					<article className='experience-item' key={`${item.company}-${index}`}>
						<div className='experience-date mono-label'>{item.time}</div>
						<div>
							<div className='experience-role'>{item.role}</div>
							<div className='experience-company'>{item.company}</div>
						</div>
						<div>
							<p className='experience-description'>{item.description}</p>
							{item.linkLabel && item.linkUrl && (
								<a className='experience-link' href={item.linkUrl}>
									{item.linkLabel} <span aria-hidden='true'>›</span>
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Experience
