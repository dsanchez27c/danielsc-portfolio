import ExpBoxShow from 'src/components/expBoxShow/ExpBoxShow';
import { Icons } from '../icons/Icons';
import { ExperienceGroupInt } from 'src/interfaces/Interfaces';
import 'src/styles/components/experienceCompany/ExperienceCompanyStyle.css';

function ExperienceCompany({ company, roles }: ExperienceGroupInt) {
	return (
		<div className="company-group">
			<div className="company-group-header item-header">
				<span className="item-icon item-icon-circle company-group-icon">
					<Icons name="suitcase" color="#ffffff" size="11" />
				</span>
				<p className="company-group-name">{company}</p>
			</div>
			<div className="company-group-roles">
				{roles.map((role) => (
					<ExpBoxShow
						key={role.title}
						title={role.title}
						startDate={role.startDate}
						endDate={role.endDate}
						startDateRaw={role.startDateRaw}
						endDateRaw={role.endDateRaw}
						status={role.status}
						isCurrent={role.isCurrent}
						description={role.description}
						icon={<Icons name="calendar" color="#ffffff" size="13" />}
					/>
				))}
			</div>
		</div>
	);
}

export default ExperienceCompany;
