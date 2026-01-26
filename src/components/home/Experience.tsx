import '/Users/asiermunoz/Documents/personal-portfolio/src/styles/Experience.css'
import type { ExperienceProps } from '/Users/asiermunoz/Documents/personal-portfolio/src/types/experience'

function Experience({ title, items }: ExperienceProps) {
	return (
		<section className='experience-section'>
			<h2 className='experience-title'>{title}</h2>

			<div className='experience-grid'>
				{items.map((item, index) => (
					<article className='experience-item' key={`${item.company}-${index}`}>
						<div>
							<div className='experience-role'>{item.role}</div>
							<div className='experience-company'>{item.company}</div>
							<div className='experience-date'>{item.time}</div>
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
