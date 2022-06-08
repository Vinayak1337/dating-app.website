import { FC } from 'react';
import {
	Group82Icon,
	Group83Icon,
	Illustration1Icon,
	Illustration2Icon
} from '../../Assets/Images';
import StepperItem from '../../Components/StepperItem/StepperItem';
import './Customer.scss';

const Customer: FC = () => {
	return (
		<div className="customer-page">
			<div className="heading-main-group">
				<div className="heading-one">
					<h1>Match. Chat. Date</h1>
				</div>
				<div className="heading-two">
					<h1>Find your match by just one click</h1>
				</div>
				<div className="heading-three">
					<h1>Get the App!</h1>
				</div>
				<div className="boxes">
					<div className="box">
						<div className="img-box">
							<Group82Icon className="img-box-icon" />
						</div>
						<div className="text-box">
							<span>Download from Google play</span>
						</div>
					</div>
					<div className="box">
						<div className="img-box">
							<Group83Icon className="img-box-icon" />
						</div>
						<div className="text-box">
							<span>Download from Apple store</span>
						</div>
					</div>
				</div>
			</div>
			<div className="image-main-group">
				<Illustration1Icon className="image-main-group-icon" />
			</div>
			<div className="stepper-wrapper">
				<StepperItem stepCounter={1} stepName="Enter Location" />
				<StepperItem
					stepCounter={2}
					stepName="Select the place you are sitting in"
					isCompleted
				/>
				<StepperItem
					stepCounter={3}
					stepName="Send request and start chatting"
				/>
				<StepperItem stepCounter={4} stepName="Enter Location" isLast />
			</div>
			<div className="interaction">
				<div className="interaction-text">
					<div className="text">
						<h2>Easy</h2>
					</div>
					<div className="text">
						<h2>Interaction</h2>
					</div>
					<div>
						<h3>Lorem Ipsium</h3>
					</div>
				</div>
				<div className="interaction-img">
					<Illustration2Icon className="interaction-img-icon" />
				</div>
			</div>
		</div>
	);
};

export default Customer;
