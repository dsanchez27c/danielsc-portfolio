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

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('header');
			if (window.scrollY > 30) {
				header?.classList.add('header-container-scrolled');
			} else {
				header?.classList.remove('header-container-scrolled');
			}
		};

		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

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
					<h3>Daniel Sánchez</h3>
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
				<span className="lang-label">ES</span>
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
				<span className="lang-label">EN</span>
			</section>

			<HeaderMobile />
		</header>
	);
}

export default Header;
