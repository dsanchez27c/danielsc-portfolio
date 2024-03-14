import "src/styles/components/myTitle/MyTitleStyle.css";

import UserImage from "src/assets/user-img.webp";
import AccessBtn from "src/components/accessBtn/AccessBtn";

import PortfolioPDFSpanish from "src/pdf/DS HDV Enero24 -spa.pdf";

function MyTitle() {
  return (
    <section className="my-title-main">
      <section className="title-container">
        <section className="user-basic-info">
          <h2 className="name-dev">Daniel Sánchez</h2>
          <p className="job-dev">
            Frontend Developer{" "}
            <span className="badge">
              Disponible para trabajar
              <span className="triangle triangle-top"></span>
              <span className="triangle triangle-bot"></span>
            </span>
          </p>

          <p className="resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            ducimus culpa repellendus vitae dignissimos, inventore earum vero
            necessitatibus ut eum, deleniti quibusdam sed aperiam, consequuntur
            possimus exercitationem et. Eligendi, cumque.
          </p>
          <article className="social-media-btn-group">
            <AccessBtn
              classBtn="download-cv"
              href={PortfolioPDFSpanish}
              textBtn="Descargar CV"
            />
            <AccessBtn
              classBtn="social-media-btn"
              href="https://www.linkedin.com/in/daniel-sanchez-147552219/"
              nameIcon="linkedin"
              sizeIcon="40"
              colorIcon="#0a66c2"
            />
            <AccessBtn
              classBtn="social-media-btn"
              href="https://github.com/dsanchez27c"
              nameIcon="github"
              sizeIcon="34"
              colorIcon="#adbac7"
              textBtn=""
            />
          </article>
        </section>

        <article className="user-img">
          <img src={UserImage} alt="" />
        </article>
      </section>
    </section>
  );
}

export default MyTitle;
