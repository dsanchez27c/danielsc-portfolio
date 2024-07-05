import 'src/styles/components/myTitle/MyTitleStyle.css';

import AccessBtn from 'src/components/accessBtn/AccessBtn';

import PortfolioPDFSpanish from 'src/pdf/DS HDV Enero24 -spa.pdf';

interface MyTitleInterface {
	name: string;
	intro: string;
	openToWork: boolean;
	image?: any;
}

function MyTitle({ name, intro, openToWork, image }: MyTitleInterface) {
	return (
		<section className="my-title-main">
			<section className="title-container">
				<section className="user-basic-info">
					<h2 className="name-dev">{name}</h2>
					<p className="job-dev">
						Frontend Developer{' '}
						{openToWork ? (
							<span className="badge">
								Disponible para trabajar
								<span className="triangle triangle-top"></span>
								<span className="triangle triangle-bot"></span>
							</span>
						) : (
							<>Already working!</>
						)}
					</p>

					<p className="resume">{intro}</p>
					<article className="social-media-btn-group">
						<AccessBtn
							classBtn="download-cv"
							href={PortfolioPDFSpanish}
							textBtn="Descargar CV"
						/>
						<AccessBtn
							classBtn="social-media-btn"
							href="https://www.linkedin.com/in/daniel-sanchez-147552219/"
							nameIcon="linkedin"
							sizeIcon="40"
							colorIcon="#0a66c2"
						/>
						<AccessBtn
							classBtn="social-media-btn"
							href="https://github.com/dsanchez27c"
							nameIcon="github"
							sizeIcon="34"
							colorIcon="#adbac7"
							textBtn=""
						/>
					</article>
				</section>

				<article className="user-img">
					<img
						className="img-unit"
						src={image}
						alt="normal user image"
						title="Normal User Image"
					/>
				</article>
			</section>
		</section>
	);
}

export default MyTitle;
