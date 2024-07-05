import 'src/styles/components/header/HeaderStyle.css';
// import ToggleBtn from "../toggle/ToggleBtn";
// import { Icons } from "../icons/Icons";

function Header() {
	const VAR_ITEMS: string[] = [
		'Intro',
		'Experiencia',
		'Proyectos',
		'Tecnologías',
	];

	document.addEventListener('scroll', () => {
		const header = document.querySelector('header');

		if (window.scrollY > 30) {
			header?.classList.add('header-container-scrolled');
		} else {
			header?.classList.remove('header-container-scrolled');
		}
	});

	return (
		<header className="header-container">
			<article className="header-article">
				<section className="open-sidebar-container">
					<h3>
						<em>Frontend Dev</em>
					</h3>
				</section>

				<section className="header-nav">
					<nav className="nav-bar">
						<ul className="nav-bar-list">
							{VAR_ITEMS.map((item: string) => {
								return (
									<li key={item} className="nav-bar-item">
										<a className="nav-link" href={`#${item.toLowerCase()}`}>
											{item}
										</a>
										<span className="hover-list-line"></span>
									</li>
								);
							})}
						</ul>
					</nav>
					{/* <span className="dark-light-mode">
            <Icons name="sun" color="yellow" size="24" />
          </span> */}
				</section>
				{/* 
        <article className="header-social-media">
          <section className="social-media-container">

          </section>
        </article> */}
				{/* <section className="header-change-light-btn">
          <ToggleBtn />
        </section> */}
			</article>
		</header>
	);
}

export default Header;
