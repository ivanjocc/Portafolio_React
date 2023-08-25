import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import LogoImage from '../images/logo.png';
import '../styles/Header.css';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="logo">
				<Link to="home" smooth={true} duration={500}>
					<img src={LogoImage} alt="Logo" />
				</Link>
			</div>
			<div className={`menu ${isMenuOpen ? 'active' : ''}`}>
				<Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
					About
				</Link>
				<Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
					Projects
				</Link>
				<Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
					Contact
				</Link>
			</div>
			<div className="mobile-menu-icon">
				<FaBars onClick={toggleMenu} />
			</div>
		</header>
	);
};

export default Header;
