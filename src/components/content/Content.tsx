import 'src/styles/components/content/contentStyle.css';
import UserImage from 'src/assets/user-img-sq.webp';
// import UserImage from 'src/assets/user-img.webp';

import Experience from 'src/components/experience/Experience';
import MyTitle from 'src/components/myTitle/MyTitle';
import Projects from 'src/components/projects/Projects';
import { useTranslation } from 'react-i18next';

function Content() {
	const [t] = useTranslation('global');

	return (
		<main className="content-main-pf">
			<MyTitle
				name="Daniel Sánchez"
				job={t('mytitle.job')}
				intro={t('mytitle.description')}
				openToWork={true}
				image={UserImage}
				downloadText={t('mytitle.downloadbtn')}
			/>
			<Experience />
			<Projects />
		</main>
	);
}

export default Content;
