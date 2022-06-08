import {
	CSSProperties,
	FC,
	MutableRefObject,
	useEffect,
	useRef,
	useState
} from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { useRegisterOutsideListener } from '../../../Assets';
import { ArrowRightIcon } from '../../../Assets/Images';
import ContactForm from '../Contact/Contact';
import './Navbar.scss';

const Navbar: FC<RouteComponentProps & NavbarProps> = ({
	history,
	headerLogo
}) => {
	const [state, setState] = useState<NavbarState>({
		route: '',
		showContact: false,
		navbarActive: false
	});

	const toggleNavbar = () => {
		changeState({ navbarActive: !state.navbarActive });
	};

	const arrowRightIconRef = useRef() as MutableRefObject<HTMLDivElement>;

	const handleOutsideListener = (event: MouseEvent) => {
		if (!arrowRightIconRef.current?.contains(event.target as Node) && state.navbarActive) {
			toggleNavbar()
		}
	};

	useRegisterOutsideListener('navbar', handleOutsideListener);

	const changeState = (newState: NavbarNewState) =>
		setState((prevState: NavbarState) => ({ ...prevState, ...newState }));

	useEffect(
		() => {
			const path = history.location.pathname.slice(1);
			path ? changeState({ route: path }) : changeState({ route: '' });
		},
		[history.location.pathname]
	);

	const toggleContactForm = () =>
		changeState({ showContact: !state.showContact });

	const ArrowIconStyle: CSSProperties = {
		transform: 'rotate(180deg)'
	};

	const mainMenuStyle: CSSProperties = {
		transform: 'translateX(0px)'
	};

	return (
		<>
			<nav className={`main-nav ${headerLogo ? 'has-main-nav-logo' : ''}`}>
				<button className="main-nav-button">
					{headerLogo
						? <img src={headerLogo} className="main-nav-logo" alt="Logo" />
						: 'Logo'}
				</button>
				<ul className="main-menu" style={state.navbarActive ? mainMenuStyle : {}}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">About Us</Link>
					</li>
					<li>
						<Link to="/">Pricing</Link>
					</li>
					<li onClick={toggleContactForm} className="contact-us">
						Contact Us
					</li>
					{state.route === 'owner'
						? <div>
								<li id="sign-in">
									<Link to="/signin">
										<button>Sign In</button>
									</Link>
								</li>
								<li id="sign-up">
									<Link to="/signup">
										<button>Sign Up</button>
									</Link>
								</li>
							</div>
						: ''}
					<div
						className="nav-arrow-right-icon-container"
						ref={arrowRightIconRef}
						onClick={toggleNavbar}>
						<ArrowRightIcon
							style={state.navbarActive ? ArrowIconStyle : {}}
							className="nav-arrow-right-icon"
						/>
					</div>
				</ul>
			</nav>
			{state.showContact && <ContactForm handleClose={toggleContactForm} />}
		</>
	);
};

const mapStateToProps = (state: RootState) => ({
	headerLogo: state.logoReducer.logos.headerLogo
});

export default withRouter(connect(mapStateToProps)(Navbar));
