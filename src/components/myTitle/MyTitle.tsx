import "src/styles/components/myTitle/MyTitleStyle.css";
import UserImage from "src/assets/user-img.webp";

function MyTitle() {
  return (
    <section className="my-title-main">
      <section className="title-container">
        <section className="user-basic-info">
          <h2>
            <span className="name-dev">Daniel Sánchez</span>
            <br />
            <span className="job-dev">Frontend Developer</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            ducimus culpa repellendus vitae dignissimos, inventore earum vero
            necessitatibus ut eum, deleniti quibusdam sed aperiam, consequuntur
            possimus exercitationem et. Eligendi, cumque.
          </p>
          <article className="download-cv-btn">
            <button>
              <a href="#">Descargar CV</a>
            </button>
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
