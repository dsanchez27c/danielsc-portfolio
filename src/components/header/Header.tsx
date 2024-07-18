import 'src/styles/components/header/HeaderStyle.css';
import HeaderMobile from '../headerMobile/HeaderMobile';

import { useTranslation } from 'react-i18next';
import { ChangeEvent, useEffect, useState } from 'react';
import { VAR_ITEM_KEYS } from 'src/variables/Variables';

function Header() {
	const [t, i18n] = useTranslation('global');
	const [languageChecked, setLanguageChecked] = useState(
		localStorage.getItem('currentLng') === 'en' ? true : false
	);

	document.addEventListener('scroll', () => {
		const header = document.querySelector('header');

		if (window.scrollY > 30) {
			header?.classList.add('header-container-scrolled');
		} else {
			header?.classList.remove('header-container-scrolled');
		}
	});

	useEffect(() => {
		if (navigator.language.slice(0, 2) === 'en') {
			setLanguageChecked(true);
		}
	}, []);

	function languageChange(e: ChangeEvent<HTMLInputElement>) {
		const targetChecked = e.target.checked;
		if (targetChecked) {
			setLanguageChecked(targetChecked);
			i18n.changeLanguage('en');
			localStorage.setItem('currentLng', 'en');
		} else {
			setLanguageChecked(targetChecked);
			i18n.changeLanguage('es');
			localStorage.setItem('currentLng', 'es');
		}
	}

	return (
		<header className="header-container">
			<section className="header-article">
				<article className="open-sidebar-container">
					<h3>
						<em>Frontend Dev</em>
					</h3>
				</article>

				<article className="header-nav">
					<nav className="nav-bar">
						<ul className="nav-bar-list">
							{VAR_ITEM_KEYS.map((item: string) => {
								return (
									<li key={item} className="nav-bar-item">
										<a className="nav-link" href={`#${t(item).toLowerCase()}`}>
											{t(item)}
										</a>
									</li>
								);
							})}
						</ul>
					</nav>
				</article>
			</section>

			<section className="header-language-btn">
				<label className="switch">
					<input
						type="checkbox"
						checked={languageChecked}
						onChange={(e) => {
							languageChange(e);
						}}
					/>
					<span className="slider round"></span>
				</label>
			</section>

			<HeaderMobile />
		</header>
	);
}

export default Header;
