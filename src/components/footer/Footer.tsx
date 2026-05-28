import { Icons } from '../icons/Icons';
import 'src/styles/components/footer/FooterStyle.css';

function Footer() {
	return (
		<footer>
			<article>
				<section>
					<p>
						<span>
							<Icons name="phone" color="#fff" size="28" />
						</span>
						+57 320-4562946
					</p>
					<p>
						<span>
							<Icons name="email" color="#fff" size="28" />
						</span>
						danielalejandrosc96@gmail.com
					</p>
				</section>
				<section>
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
				</section>
			</article>
			<p className="footer-copy">© 2026 Daniel Sánchez.</p>
		</footer>
	);
}

export default Footer;
