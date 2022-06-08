import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { baseUrl } from '../../../Assets';
import { CloseIcon } from '../../../Assets/Images';
import { FormButton } from '../../Global';
import FormInput from '../../Global/FormInput/FormInput';
import MessageBar from '../../Global/MessageBar/MessageBar';
import './Contact.scss';

const ContactForm: FC<ContactFormProps> = ({ handleClose }) => {
	const [state, setState] = useState<ContactFormState>({
		name: '',
		email: '',
		phoneNo: '',
		message: '',
		isLoading: false,
		showMessageBar: false,
		messageBarMsg: 'Something went wrong',
		messageType: 'error',
		messageTime: 0
	});

	const changeState = (newState: ContactFormNewState) =>
		setState((prevState: ContactFormState) => ({ ...prevState, ...newState }));

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		changeState({ [name]: value });
	};

	const toggleMessageBar = (
		messageType: MessageBarType,
		messageBarMsg: string,
		messageTime?: number
	) => {
		changeState({
			messageBarMsg,
			messageType,
			messageTime,
			showMessageBar: true
		});

		setTimeout(() => {
			changeState({
				messageBarMsg: 'Something went wrong',
				messageType: 'error',
				showMessageBar: false,
				messageTime: 0
			});
		}, (messageTime || 3) * 1000);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		changeState({ isLoading: true });
		const res = await fetch(`${baseUrl}/register/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: state.name,
				email: state.email,
				phoneNo: state.phoneNo,
				message: state.message
			})
		});

		changeState({ isLoading: false });
		if (res.status === 200) {
			toggleMessageBar('success', 'Successfully sent the message.', 5);
		} else {
			toggleMessageBar('error', 'Something went wrong, please try again later.', 5);
		}

		changeState({
			name: '',
			email: '',
			phoneNo: '',
			message: ''
		});
	};

	return (
		<div className="contact-container">
			<div className="contact-body">
				<div className="contact-items">
					<form action="post" onSubmit={handleSubmit}>
						<h3>Contact Us</h3>
						<FormInput
							type="text"
							label="Your Name"
							name="name"
							handleChange={handleChange}
							value={state.name}
							required
						/>
						<FormInput
							type="email"
							label="Your Email"
							name="email"
							handleChange={handleChange}
							value={state.email}
							required
						/>

						<FormInput
							type="tel"
							label="Contact Number"
							name="phoneNo"
							placeholder="+91-123-456-7890"
							pattern="(\+[0-9]{2}-)*[0-9]{3}(-*)[0-9]{3}(-*)[0-9]{4}"
							handleChange={handleChange}
							value={state.phoneNo}
							required
						/>
						<textarea
							name="message"
							cols={24}
							rows={5}
							maxLength={2084}
							wrap="hard soft"
							placeholder="Message"
							onChange={handleChange}
							value={state.message}
						/>
						<FormButton type="submit" content="Submit" isLoading={state.isLoading} />
					</form>
				</div>
				<CloseIcon className="contact-close-icon" onClick={handleClose} />
			</div>
			{state.showMessageBar &&
				<MessageBar
					message={state.messageBarMsg}
					type={state.messageType}
					handleClose={() => {
						changeState({
							messageBarMsg: 'Something went wrong',
							messageType: 'error',
							showMessageBar: false,
							messageTime: 0
						});
					}}
					time={state.messageTime}
				/>}
		</div>
	);
};

export default ContactForm;
