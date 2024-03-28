import ExpBoxShow from "src/components/expBoxShow/ExpBoxShow";
import { Experiences } from "src/variables/Variables";
import { Icons } from "../icons/Icons";

import "src/styles/components/experience/ExperienceStyle.css";

function Experience() {
  return (
    <section id="experience" className="experience-box-main">
      <div className="experience-box-container">
        <h2 className="experience-box-section-title">
          <span className="experience-box-icon-container">
            <Icons name="suitcase" color="#ffffff" size="24" />
          </span>
          Experiencia Laboral
        </h2>
        {Experiences.map((experience) => {
          const { title, startDate, endDate, description, status } = experience;
          return (
            <ExpBoxShow
              key={title}
              title={title}
              startDate={startDate}
              endDate={endDate}
              description={description}
              // charge={charge}
              status={status}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
