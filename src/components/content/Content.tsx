import "src/styles/components/content/contentStyle.css";

import Experience from "src/components/experience/Experience";
import MyTitle from "src/components/myTitle/MyTitle";
import Projects from "src/components/projects/Projects";

function Content() {
  return (
    <main className="content-main-pf">
      <MyTitle />
      <Experience />
      <Projects />
    </main>
  );
}

export default Content;
