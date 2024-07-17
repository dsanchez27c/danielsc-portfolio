import ExpBoxShow from 'src/components/expBoxShow/ExpBoxShow';
import { Icons } from '../icons/Icons';

import 'src/styles/components/experience/ExperienceStyle.css';
import Title from '../titleComp/Title';

import { useTranslation } from 'react-i18next';
import { ExperiencesInt } from 'src/interfaces/Interfaces';

function Experience() {
	const [t] = useTranslation('global');
	let idExperience = t('header.experience').toLowerCase();

	const Experiences: ExperiencesInt[] = [
		{
			title: 'Desarrollador Frontend - Antpack S.A.S.',
			startDate: 'Marzo 01, 2022',
			endDate: 'Abril 04, 2023',
			status: 'Finalizado',
			description:
				'Creación de aplicaciones web funcionales y colaboración con el equipo de Diseño para incorporar componentes a proyectos existentes. Trabajo estrecho con el equipo de Backend para integrar endpoints y optimizar la comunicación entre las partes del sistema. Desarrollo de diversos formularios desde encuestas a registro de usuarios, asegurando usabilidad y validación de datos. Actualización de contenido en proyectos basados en Wordpress y Shopify. Creación de email personalizados para empresas en Colombia.',
			icon: <Icons name="calendar" color="#ffffff" size="13" />,
		},
	];

	return (
		<section id={idExperience} className="experience-box-main">
			<div className="experience-box-container">
				<Title
					title="Experiencia Laboral"
					icon={<Icons name="suitcase" color="#ffffff" size="24" />}
				/>
				{Experiences.map((experience) => {
					const { title, startDate, endDate, description, status, icon } =
						experience;
					return (
						<ExpBoxShow
							key={title}
							title={title}
							startDate={startDate}
							endDate={endDate}
							description={description}
							status={status}
							icon={icon}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Experience;
