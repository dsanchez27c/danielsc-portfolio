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
			title: t('experience.card.title'),
			startDate: t('experience.card.startDate'),
			endDate: t('experience.card.endDate'),
			status: t('experience.card.status'),
			description: t('experience.card.description'),
			icon: <Icons name="calendar" color="#ffffff" size="13" />,
		},
	];

	return (
		<section id={idExperience} className="experience-box-main">
			<div className="experience-box-container">
				<Title
					title={t('experience.titleSection')}
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
