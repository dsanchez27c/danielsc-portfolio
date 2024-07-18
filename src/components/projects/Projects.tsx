import { ProjectList } from 'src/variables/Variables';
import ProjectBox from '../projectBox/ProjectBox';
import Title from '../titleComp/Title';
import { Icons } from '../icons/Icons';

import 'src/styles/components/projects/ProjectStyle.css';
import { useTranslation } from 'react-i18next';

function Projects() {
	const [t] = useTranslation('global');
	let idProjects = t('header.projects').toLowerCase();
	return (
		<section id={idProjects} className="projects-main">
			<div className="projects-container">
				<Title
					title={t('project.titleSection')}
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
