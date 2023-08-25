import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<p className="footer-text">
					© {new Date().getFullYear()} Iván. All rights reserved.
				</p>
				<div className="footer-social-icons">
					<a href="https://github.com/ivanjocc" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github"></i>
					</a>
					<a href="https://www.linkedin.com/in/ivan-miranda-r/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="mailto:ivanjose_04@hotmail.com">
						<i className="fas fa-envelope"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
