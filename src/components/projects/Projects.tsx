import { ProjectList } from 'src/variables/Variables';
import ProjectBox from '../projectBox/ProjectBox';

function Projects() {
	return (
		<section id="proyectos">
			{ProjectList.map(({ title, description, link, github, image, tags }) => {
				return (
					<ProjectBox
						key={title}
						title={title}
						description={description}
						link={link}
						github={github}
						image={image}
						tags={tags}
					/>
				);
			})}
		</section>
	);
}

export default Projects;
