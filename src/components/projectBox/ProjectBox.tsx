import { ProjectsInt } from 'src/interfaces/Interfaces';
import 'src/styles/components/projectBox/ProjectBoxStyle.css';
import { Icons } from '../icons/Icons';
import { useTranslation } from 'react-i18next';

function ProjectBox({
	title,
	description,
	link,
	github,
	image,
	tags,
}: ProjectsInt) {
	const [t] = useTranslation('global');

	return (
		<article className="project-article">
			<h3 className="project-title item-header">
				<span className="item-icon">
					<Icons name="book" color="#FFF" size="20" />
				</span>
				{t(title)}
			</h3>
			<p className="project-description">{t(description)}</p>
			<ul className="project-tag-list">
				{tags.map((tag, idx) => {
					return (
						<li key={idx} className="project-tag-list-el">
							<Icons name={tag.toLowerCase()} size="18" />
							<span>{tag}</span>
						</li>
					);
				})}
			</ul>
			{(link || github) && (
				<div className="project-links">
					{link && (
						<a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
							<Icons name="code" size="16" color="#fff" />
							<span>Demo</span>
						</a>
					)}
					{github && (
						<a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
							<Icons name="github" size="16" color="#adbac7" />
							<span>GitHub</span>
						</a>
					)}
				</div>
			)}
			<img
				className="project-img"
				src={image}
				alt={`${t(title)} — preview`}
			/>
		</article>
	);
}

export default ProjectBox;
