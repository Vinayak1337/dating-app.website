import { FC, useCallback, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Footer, Header } from '../Components';
import { Auth, Customer, Error as ErrorPage, Home, Owner } from '../Pages';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';
import { setLogos } from '../Redux/LogoReducer/logoActions';
import { Dispatch } from 'redux';
import { baseUrl } from '../Assets';

const App: FC<RouteComponentProps & AppProps> = ({ history, setLogos }) => {
	const [route, setRoute] = useState<string>('');

	const fetchAdminLogo = useCallback(
		async () => {
			const res = await fetch(`${baseUrl}/api/config/logo`);
			if (!(res.status === 200)) return;
			const logos = await res.json();
			setLogos({
				headerLogo: logos.Headerlogo,
				footerLogo: logos.Footerlogo,
				adminLogo: logos.Adminlogo,
			});
		},
		[setLogos],
	);

	useEffect(
		() => {
			fetchAdminLogo();
		},
		[fetchAdminLogo],
	);

	useEffect(
		() => {
			const path = history.location.pathname.slice(1);
			path ? setRoute(path) : setRoute('home');
		},
		[history.location.pathname],
	);

	return (
		<div className="app-body">
			<div className="main-group">
				<Header />
				<div className="container">
					<div
						className={`main-group-container-class ${route === 'home'
							? 'main-group-main-page-class'
							: route === 'owner' ? 'pa-btm' : ''}`}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/owner" component={Owner} />
							<Route exact path="/customer" component={Customer} />
							<Route exact path="/signup" component={Auth} />
							<Route exact path="/signin" component={Auth} />
							<Route component={ErrorPage} />
						</Switch>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	setLogos: (logos: AppLogos) => dispatch(setLogos(logos)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
