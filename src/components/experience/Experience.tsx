import ExperienceCompany from 'src/components/experienceCompany/ExperienceCompany';
import { Icons } from '../icons/Icons';

import 'src/styles/components/experience/ExperienceStyle.css';
import Title from '../titleComp/Title';

import { useTranslation } from 'react-i18next';
import { ExperienceGroupInt } from 'src/interfaces/Interfaces';

function Experience() {
	const [t] = useTranslation('global');
	const idExperience = t('header.experience').toLowerCase();

	const groups: ExperienceGroupInt[] = [
		{
			company: t('experience.card4.company'),
			roles: [
				{
					title: t('experience.card4.title'),
					startDate: t('experience.card4.startDate'),
					endDate: t('experience.card4.endDate'),
					startDateRaw: '2026-04',
					status: t('experience.card4.status'),
					isCurrent: true,
					description: t('experience.card4.description'),
				},
			],
		},
		{
			company: t('experience.card3.company'),
			roles: [
				{
					title: t('experience.card3.title'),
					startDate: t('experience.card3.startDate'),
					endDate: t('experience.card3.endDate'),
					startDateRaw: '2026-03',
					endDateRaw: '2026-04',
					status: t('experience.card3.status'),
					description: t('experience.card3.description'),
				},
				{
					title: t('experience.card2.title'),
					startDate: t('experience.card2.startDate'),
					endDate: t('experience.card2.endDate'),
					startDateRaw: '2024-08',
					endDateRaw: '2026-03',
					status: t('experience.card2.status'),
					description: t('experience.card2.description'),
				},
			],
		},
		{
			company: t('experience.card.company'),
			roles: [
				{
					title: t('experience.card.title'),
					startDate: t('experience.card.startDate'),
					endDate: t('experience.card.endDate'),
					startDateRaw: '2022-03',
					endDateRaw: '2023-04',
					status: t('experience.card.status'),
					description: t('experience.card.description'),
				},
			],
		},
	];

	return (
		<section id={idExperience} className="experience-box-main">
			<div className="experience-box-container">
				<Title
					title={t('experience.titleSection')}
					icon={<Icons name="suitcase" color="#ffffff" size="24" />}
				/>
				{groups.map((group) => (
					<ExperienceCompany
						key={group.company}
						company={group.company}
						roles={group.roles}
					/>
				))}
			</div>
		</section>
	);
}

export default Experience;
