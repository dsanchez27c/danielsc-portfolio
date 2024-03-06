import "src/styles/components/header/HeaderStyle.css";
import { Icons } from "src/components/icons/Icons";

function Header() {
  const VAR_ITEMS: string[] = ["Intro", "Experience", "About", "Technologies"];

  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 30) {
      header?.classList.add("header-container-scrolled");
    } else {
      header?.classList.remove("header-container-scrolled");
    }
  });

  return (
    <header className="header-container">
      <article className="header-article">
        <section className="open-sidebar-container">
          <h3>
            <em>Frontend Dev</em>
          </h3>
          {/* <button
          className="open-sidebat-btn"
          type="button"
        >
          {openText}
        </button>*/}
        </section>

        <section className="header-nav">
          <nav className="nav-bar">
            <ul className="nav-bar-list">
              {VAR_ITEMS.map((item: string) => {
                return (
                  <li key={item} className="nav-bar-item">
                    {item}
                    <span className="hover-list-line"></span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
        {/* 
        <article className="header-social-media">
          <section className="social-media-container">
            <button className="social-media-btn">
              <a
                href="https://www.linkedin.com/in/daniel-sanchez-147552219/"
                target="_blank"
              >
                <Icons name="linkedin" size="44" />
              </a>
            </button>

            <button className="social-media-btn">
              <a href="#" target="_blank">
                <Icons name="github" size="44" />
              </a>
            </button>
          </section>
        </article> */}
        <section className="header-change-light-btn">
          <button className="change-light-btn">
            <span>
              <Icons name="sun" size="14" color="yellow" />
            </span>
            <span>
              <Icons name="moon" size="14" color="blue" />
            </span>
          </button>
        </section>
      </article>
    </header>
  );
}

export default Header;
