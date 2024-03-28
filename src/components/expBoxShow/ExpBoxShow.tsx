import { ExperiencesInt } from "src/interfaces/Interfaces";
import "src/styles/components/expBoxShow/ExpBoxShowStyle.css";
import { Icons } from "../icons/Icons";

function ExpBoxShow({
  title,
  startDate,
  endDate,
  description,
  // charge,
  status,
}: ExperiencesInt) {
  return (
    <article className="experience-container">
      <div className="title-info-container">
        <span className="icon-container">
          <Icons name="calendar" color="#ffffff" size="14" />
        </span>
        <h2 className="experience-title">
          {title} <span className="experience-status">{status}</span>
        </h2>
      </div>
      <div className="experience-info">
        <p className="date-info">
          {startDate} - {endDate}
        </p>
        {/* <h4 className="experience-charge">{charge}</h4> */}
        <p className="experience-description">{description}</p>
      </div>
    </article>
  );
}

export default ExpBoxShow;
