import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Icon1Icon, Icon2Icon, IllustrationIcon } from '../../Assets/Images';
import './Home.scss';

const Home: FC = () => {
	return (
		<div className="main-page">
			<div className="heading-main-group">
				<div className="heading-one">
					<h1>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</h1>
				</div>
				<div className="heading-two">
					<h1>Lorem Ipsum is simply dummy</h1>
				</div>
			</div>
			<div className="image-main-group">
				<IllustrationIcon className="illustration-icon" />
			</div>
			<div className="cards">
				<div className="card">
					<div className="img-card">
						<img src={Icon1Icon} alt="" />
					</div>
					<div className="card-text">
						<div className="heading-text">
							<h1>For Cafe Owner</h1>
						</div>
						<div className="card-para">
							<p>
								Lorem Ipsum is simply a dummy text of the printing and
								typesetting industry.
							</p>
						</div>
						<div className="card-button">
							<Link to="/owner">
								<button className="card-button">Know more</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="img-card two">
						<img src={Icon2Icon} alt="" />
					</div>
					<div className="card-text">
						<div className="heading-text">
							<h1>For App Users</h1>
						</div>
						<div className="card-para">
							<p>
								Lorem Ipsum is simply a dummy text of the printing and
								typesetting industry.
							</p>
						</div>
						<div className="card-button">
							<Link to="/customer">
								<button className="card-button">Know more</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
