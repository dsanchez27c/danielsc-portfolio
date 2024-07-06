import { ProjectsInt } from 'src/interfaces/Interfaces';
import 'src/styles/components/projectBox/ProjectBoxStyle.css';
import { Icons } from '../icons/Icons';

function ProjectBox({
	title,
	description,
	// link,
	// github,
	image,
	tags,
}: ProjectsInt) {
	return (
		<article className="project-article">
			<h3 className="project-title">
				<Icons name="book" color="#FFF" size="20" />
				{title}
			</h3>
			<p className="project-description">{description}</p>
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
			<img
				className="project-img"
				src={image}
				alt={`Captura de pantalla del proyecto ${image}`}
			/>
		</article>
	);
}

export default ProjectBox;