import { ChangeEvent, FC, MutableRefObject, useRef, useState } from 'react';
import { baseUrl } from '../../../Assets';
import { FormButton, MessageBar } from '../../Global';
import FormInput from '../../Global/FormInput/FormInput';
import axios from 'axios';
import './SignUp.scss';

const SignUp: FC = () => {
	const [state, setState] = useState<SignUpState>({
		cafeName: '',
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		location: '',
		city: '',
		country: '',
		image: null,
		isLoading: false,
		showMessageBar: false,
		selectCountryActive: false,
		message: 'Something went wrong',
		messageType: 'error',
		messageTime: 0
	});

	const uploadElement = useRef() as MutableRefObject<HTMLInputElement>;

	const changeState = (newState: SignUpNewState) =>
		setState((prevState: SignUpState) => ({ ...prevState, ...newState }));

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		changeState({ [name]: value });
	};

	const handleSubmit = async () => {
		changeState({ isLoading: true });

		const {
			email,
			cafeName,
			firstName,
			lastName,
			location,
			city,
			country,
			phoneNumber,
			image
		} = state;

		const formData = new FormData();

		const object = {
			email,
			cafeName,
			firstName,
			lastName,
			location,
			city,
			country,
			phoneNumber
		};

		for (const key in object)
			if (key in object)
				formData.append(key, object[key as keyof typeof object]);

		console.log(image);
		if (image.name) formData.append('picture', image);

		const res = await axios.post(`${baseUrl}/owner/signup`, formData, {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		});
		changeState({ isLoading: false });

		if (res.status === 200) {
			toggleMessageBar('success', 'Thank you for the signin up.', 5);
		} else {
			const json = await res.data;
			toggleMessageBar(
				'error',
				json.error ||
					json.message ||
					json.status ||
					'Something went wrong,  please try again later.',
				3
			);
		}

		changeState({
			email: '',
			cafeName: '',
			firstName: '',
			lastName: '',
			location: '',
			city: '',
			country: '',
			phoneNumber: ''
		});
	};

	const toggleMessageBar = (
		messageType: MessageBarType,
		message: string,
		messageTime?: number
	) => {
		changeState({ message, messageType, messageTime, showMessageBar: true });

		setTimeout(() => {
			changeState({
				message: 'Something went wrong',
				messageType: 'error',
				showMessageBar: false,
				messageTime: 0
			});
		}, (messageTime || 3) * 1000);
	};

	const closeMessageBar = () =>
		changeState({
			message: 'Something went wrong',
			showMessageBar: false,
			messageType: 'error',
			messageTime: 0
		});

	return (
		<div className='main-signup-body'>
			<div className='main-signup-form'>
				<form onSubmit={handleSubmit}>
					<h3>Sign Up</h3>
					<div className='form-inputs'>
						<FormInput
							type='text'
							name='cafeName'
							label='Cafe Name'
							handleChange={handleChange}
							value={state.cafeName}
							required
						/>
						<div className='flex-row'>
							<FormInput
								type='text'
								name='firstName'
								label='First Name'
								handleChange={handleChange}
								value={state.firstName}
								required
							/>
							<FormInput
								type='text'
								name='lastName'
								label='Last Name'
								handleChange={handleChange}
								value={state.lastName}
								required
							/>
						</div>
						<div className='flex-row'>
							<FormInput
								type='email'
								name='email'
								label='Your Email'
								handleChange={handleChange}
								value={state.email}
								required
							/>
							<FormInput
								type='tel'
								name='phoneNumber'
								label='Contact Number'
								placeholder='+91-123-456-7890'
								pattern='(\+[0-9]{2}-)*[0-9]{3}(-*)[0-9]{3}(-*)[0-9]{4}'
								handleChange={handleChange}
								value={state.phoneNumber}
								required
							/>
						</div>
						<FormInput
							type='text'
							name='location'
							label='Your Location'
							handleChange={handleChange}
							value={state.location}
							required
						/>
						<div className='flex-row'>
							<FormInput
								type='text'
								name='city'
								label='Your City'
								handleChange={handleChange}
								value={state.city}
								required
							/>

							<FormInput
								type='text'
								name='country'
								label='Your Country'
								handleChange={handleChange}
								value={state.country}
								required
							/>
						</div>
						<FormInput
							type='file'
							name='image'
							label='Cafe Image'
							handleChange={(event: ChangeEvent<HTMLInputElement>) => {
								const files = event.target?.files;
								if (!files?.length) return;
								console.log(files[0]);

								changeState({ image: files[0] });
							}}
							value={state.image}
							required
							accept='image/*'
							hidden
							ref={uploadElement}></FormInput>
					</div>
					<FormButton
						type='submit'
						isLoading={state.isLoading}
						content='Join Now'
						handleClick={handleSubmit}
					/>
				</form>
				{state.showMessageBar && (
					<MessageBar
						type={state.messageType}
						message={state.message}
						handleClose={closeMessageBar}
					/>
				)}
			</div>
		</div>
	);
};

export default SignUp;
