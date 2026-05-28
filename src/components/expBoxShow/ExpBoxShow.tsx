import { useTranslation } from 'react-i18next';
import { ExperiencesInt } from 'src/interfaces/Interfaces';
import 'src/styles/components/expBoxShow/ExpBoxShowStyle.css';

function getDuration(startRaw: string, endRaw: string | undefined, t: (key: string) => string): string {
	const [startYear, startMonth] = startRaw.split('-').map(Number);

	let endYear: number, endMonth: number;
	if (endRaw) {
		[endYear, endMonth] = endRaw.split('-').map(Number);
	} else {
		const now = new Date();
		endYear = now.getFullYear();
		endMonth = now.getMonth() + 1;
	}

	const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	const parts: string[] = [];
	if (years > 0) parts.push(`${years} ${years === 1 ? t('experience.duration.year') : t('experience.duration.years')}`);
	if (months > 0) parts.push(`${months} ${months === 1 ? t('experience.duration.month') : t('experience.duration.months')}`);
	if (parts.length === 0) parts.push(`1 ${t('experience.duration.month')}`);

	return parts.join(' ');
}

function ExpBoxShow({
	title,
	startDate,
	endDate,
	startDateRaw,
	endDateRaw,
	description,
	status,
	isCurrent,
	icon,
}: ExperiencesInt) {
	const [t] = useTranslation('global');

	return (
		<article className="experience-container">
			<div className="title-info-container">
				<span className="item-icon item-icon-circle">{icon}</span>
				<h3 className="experience-title">
					{title}{' '}
					<span className={`experience-status${isCurrent ? ' experience-status--current' : ''}`}>
						{status}
					</span>
				</h3>
			</div>
			<div className="experience-info">
				<p className="date-info">
					{startDate} — {endDate}
					{startDateRaw && (
						<span className="duration-badge"> · {getDuration(startDateRaw, endDateRaw, t)}</span>
					)}
				</p>
				<p className="experience-description">{description}</p>
			</div>
		</article>
	);
}

export default ExpBoxShow;
