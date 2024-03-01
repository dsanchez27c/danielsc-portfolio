import Experience from "../experience/Experience";
import MyTitle from "../myTitle/MyTitle";
import Projects from "../projects/Projects";
import "./../../styles/components/content/contentStyle.css";

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
