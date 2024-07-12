import { ProjectList } from 'src/variables/Variables';
import ProjectBox from '../projectBox/ProjectBox';
import Title from '../titleComp/Title';
import { Icons } from '../icons/Icons';

import 'src/styles/components/projects/ProjectStyle.css';

function Projects() {
	return (
		<section id="proyectos" className="projects-main">
			<div className="projects-container">
				<Title
					title="Proyectos"
					icon={<Icons name="code" size="28" color="#fff" />}
				/>
				{ProjectList.map(
					({ title, description, link, github, image, tags }) => {
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
					}
				)}
			</div>
		</section>
	);
}

export default Projects;
