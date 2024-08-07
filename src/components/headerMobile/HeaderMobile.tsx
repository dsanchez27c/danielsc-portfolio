import { useState } from 'react';
import { Icons } from '../icons/Icons';
import 'src/styles/components/headerMobile/HeaderMobileStyle.css';
import { useTranslation } from 'react-i18next';
import { VAR_ITEM_KEYS } from 'src/variables/Variables';

const HeaderMobile = () => {
	const [t] = useTranslation('global');

	const [open, setOpen] = useState(false);

	return (
		<section className="sec-mb-container dropdown">
			<button
				className="link"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Icons name="menu" size="30" color="#fff" />
			</button>
			<ul className={`dropdown-menu ${open ? 'dropdown-menu-open' : ''}`}>
				{VAR_ITEM_KEYS.map((item: string) => {
					return (
						<li key={item} className="dropdown-menu-item">
							<button
								onClick={() => {
									setOpen(!open);
								}}
							>
								<a href={`#${t(item).toLowerCase()}`}>{t(item)}</a>
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default HeaderMobile;
