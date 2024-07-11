import { ReactNode } from 'react';
import 'src/styles/components/titleComp/TitleStyle.css';

interface TitleInterface {
	title: string;
	icon: ReactNode;
}

const Title = ({ title, icon }: TitleInterface) => {
	return (
		<article className="title-container">
			<span className="icon-container">{icon}</span>
			<h2 className="title">{title}</h2>
		</article>
	);
};

export default Title;
