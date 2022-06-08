import { FC } from 'react';
import Navbar from './Navbar/Navbar';
import './Header.scss';

const Header: FC = () => {
	return (
		<section className="sec1" id="sec1">
			<div className="menu-btn">
				<i className="fas fa-bars fa-2x" />
			</div>
			<Navbar />
		</section>
	);
};

export default Header;
