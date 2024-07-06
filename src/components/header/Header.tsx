import 'src/styles/components/header/HeaderStyle.css';

function Header() {
	const VAR_ITEMS: string[] = ['Intro', 'Experiencia', 'Proyectos'];

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
				</section>
			</article>
		</header>
	);
}

export default Header;
