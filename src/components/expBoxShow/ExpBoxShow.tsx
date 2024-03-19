import { ExperiencesInt } from "src/interfaces/Interfaces";
import "src/styles/components/expBoxShow/ExpBoxShowStyle.css";

function ExpBoxShow({
  title,
  startDate,
  endDate,
  description,
  charge,
  status,
}: ExperiencesInt) {
  return (
    <article className="experience-container">
      <div className="date-info-container">
        <span className="icon-container"></span>
        <p className="date-info">
          {startDate} - {endDate}
        </p>
      </div>
      <h2 className="experience-title">
        {title} <span className="experience-status">{status}</span>
      </h2>
      <h4 className="experience-charge">{charge}</h4>
      <p className="experience-description">{description}</p>
    </article>
  );
}

export default ExpBoxShow;
