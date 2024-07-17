import 'src/App.css';

import Content from 'src/components/content/Content';
import Footer from 'src/components/footer/Footer';
import Header from 'src/components/header/Header';

import { useTranslation } from 'react-i18next';

function App() {
	const [t] = useTranslation('global');

	let idIntro = t('header.intro').toLowerCase();

	return (
		<section id={idIntro} className="app-main">
			<Header />
			<Content />
			<Footer />
		</section>
	);
}

export default App;
