import { useState } from 'react';
import { VAR_ITEMS } from '../header/Header';
import { Icons } from '../icons/Icons';
import 'src/styles/components/headerMobile/HeaderMobileStyle.css';

const HeaderMobile = () => {
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
				{VAR_ITEMS.map((item: string) => {
					return (
						<li key={item} className="dropdown-menu-item">
							<button
								onClick={() => {
									setOpen(!open);
								}}
							>
								<a href={`#${item.toLowerCase()}`}>{item}</a>
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default HeaderMobile;
