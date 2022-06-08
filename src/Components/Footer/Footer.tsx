import { ChangeEvent, FC, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Assets';
import {
	ArrowIcon,
	Group785Icon,
	InstagramIcon,
	Vector1Icon,
	VectorIcon,
} from '../../Assets/Images';
import { FormButton, MessageBar } from '../Global';
import './Footer.scss';

const Footer: FC<FooterProps> = ({ footerLogo }) => {
	const [state, setState] = useState<FooterState>({
		input: '',
		isLoading: false,
		error: '',
		showMessageBar: false,
		message: 'Something went wrong',
		messageType: 'error',
		messageTime: 0,
	});

	const validateInput = () => {
		if (
			!state.input ||
			(state.input && !state.input.match(/^[a-z0-9]{3,}@[a-z0-9]{2,}\.[a-z]{2,}/g))
		)
			return false;
		return true;
	};

	const changeState = (newState: FooterNewState) =>
		setState(prevState => ({ ...prevState, ...newState }));

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
		changeState({ input: event.target.value });

	const toggleMessageBar = (
		messageType: MessageBarType,
		message: string,
		messageTime?: number,
	) => {
		changeState({ message, messageType, messageTime, showMessageBar: true });

		setTimeout(() => {
			changeState({
				message: 'Something went wrong',
				messageType: 'error',
				showMessageBar: false,
				messageTime: 0,
			});
		}, (messageTime || 3) * 1000);
	};

	const handleSubmit = async () => {
		const isInputValid = validateInput();
		if (!isInputValid)
			return toggleMessageBar('error', 'Given input is not valid', 5);
		changeState({ isLoading: true });

		const res = await fetch(`${baseUrl}/register/newsletter`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: state.input }),
		});

		changeState({ isLoading: false });
		if (res.status === 200)
			toggleMessageBar('success', 'Thank you for subscribing to the newsletter!', 5);
		else
			toggleMessageBar('error', 'Something went wrong, please try again later.', 3);
		changeState({ input: '' });
	};

	const closeMessageBar = () =>
		changeState({
			message: 'Something went wrong',
			showMessageBar: false,
			messageType: 'error',
			messageTime: 0,
		});

	return (
		<footer className="footer">
			<div className="main-footer-class">
				<div className="logo">
					<Link to="/">
						<img src={footerLogo || Group785Icon} alt="" />
					</Link>
				</div>
				<div className="social-media-icons">
					<div className="twitter">
						<Link to="/">
							<VectorIcon />
						</Link>
					</div>
					<div className="facebook">
						<Link to="/">
							<Vector1Icon />
						</Link>
					</div>
					<div className="instagram">
						<Link to="/">
							<InstagramIcon />
						</Link>
					</div>
				</div>
				<div className="email-id">
					<input
						type="email"
						name="email"
						placeholder="sign up for newsletter"
						required
						value={state.input}
						onChange={handleInputChange}
					/>
					<FormButton
						type="submit"
						handleClick={handleSubmit}
						className="newsletter-btn"
						content={<ArrowIcon className="arrow-icon" />}
						isLoading={state.isLoading}
					/>
				</div>
			</div>
			{state.showMessageBar &&
				<MessageBar
					type={state.messageType}
					message={state.message}
					handleClose={closeMessageBar}
					time={state.messageTime}
				/>}
		</footer>
	);
};

const mapStateToProps = (state: RootState) => ({
	footerLogo: state.logoReducer.logos.footerLogo,
});

export default connect(mapStateToProps)(Footer);
