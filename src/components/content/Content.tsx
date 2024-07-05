import "src/styles/components/content/contentStyle.css";
import UserImage from "src/assets/user-img.webp";

import Experience from "src/components/experience/Experience";
import MyTitle from "src/components/myTitle/MyTitle";
import Projects from "src/components/projects/Projects";

function Content() {
  return (
    <main className="content-main-pf">
      <MyTitle
        name="Daniel Sánchez"
        intro="+1 año de experiencia. Desarrollador Web Frontend. De Falcón, Venezuela. Me especializo en crear páginas funcionales a partir de diseños y modelos de trabajo."
        openToWork={true}
        image={UserImage}
      />
      <Experience />
      <Projects />
    </main>
  );
}

export default Content;
