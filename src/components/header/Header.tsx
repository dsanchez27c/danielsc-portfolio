import { useState } from "react";
import "./../../styles/components/header/HeaderStyle.css";
import { Icons } from "../icons/Icons";

function Header() {
  const VAR_ITEMS: string[] = ["Intro", "Experience", "About", "Technologies"];

  const [open, setOpen] = useState<boolean>(true);

  const openText: string = open ? "Close" : "Open";

  const handleSidebar = open ? "header-article-show" : "header-article-hide";

  function OnOpenSidebar() {
    setOpen(!open);
  }

  return (
    <header className="header-container">
      <article className="open-sidebar-container">
        <button
          className="open-sidebat-btn"
          type="button"
          onClick={() => OnOpenSidebar()}
        >
          {openText}
        </button>
      </article>

      <article className={`header-article ${handleSidebar}`}>
        <section className="header-nav">
          <nav className="nav-bar">
            <ul className="nav-bar-list">
              {VAR_ITEMS.map((item: string) => {
                return (
                  <li key={item} className="nav-bar-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>

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
        </article>
      </article>
    </header>
  );
}

export default Header;
