import { TitleInterface } from 'src/interfaces/Interfaces';
import 'src/styles/components/titleComp/TitleStyle.css';

const Title = ({ title, icon }: TitleInterface) => {
	return (
		<article className="title-container item-header">
			<span className="item-icon">{icon}</span>
			<h2 className="title">{title}</h2>
		</article>
	);
};

export default Title;
