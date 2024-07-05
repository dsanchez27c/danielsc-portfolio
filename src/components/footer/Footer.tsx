import { Icons } from '../icons/Icons';
import './../../styles/components/footer/FooterStyle.css';

function Footer() {
	return (
		<footer>
			<article>
				<section>
					<h5>
						<span>
							<Icons name="phone" color="#fff" size="28" />
						</span>
						+57 320-4562946
					</h5>
					<h5>
						<span>
							<Icons name="email" color="#fff" size="28" />
						</span>
						danielalejandrosc96@gmail.com
					</h5>
				</section>
				<section>
					<h4>
						<a
							href="https://www.linkedin.com/in/daniel-sanchez-147552219/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<Icons name="linkedin" size="24" color="#ffffff" />
							</span>
							LinkedIn
						</a>
					</h4>
					<h4>
						<a
							href="https://github.com/dsanchez27c"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>
								<Icons name="github" size="24" color="#ffffff" />
							</span>
							Github
						</a>
					</h4>
				</section>
			</article>
			<h4>© 2024 Daniel Sánchez.</h4>
		</footer>
	);
}

export default Footer;
