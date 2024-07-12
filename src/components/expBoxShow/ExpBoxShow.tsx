import { ExperiencesInt } from 'src/interfaces/Interfaces';
import 'src/styles/components/expBoxShow/ExpBoxShowStyle.css';

function ExpBoxShow({
	title,
	startDate,
	endDate,
	description,
	status,
	icon,
}: ExperiencesInt) {
	return (
		<article className="experience-container">
			<div className="title-info-container">
				<span className="icon-container">{icon}</span>
				<h2 className="experience-title">
					{title} <span className="experience-status">{status}</span>
				</h2>
			</div>
			<div className="experience-info">
				<p className="date-info">
					{startDate} - {endDate}
				</p>
				<p className="experience-description">{description}</p>
			</div>
		</article>
	);
}

export default ExpBoxShow;
