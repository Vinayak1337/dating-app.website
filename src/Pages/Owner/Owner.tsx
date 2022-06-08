import { FC } from 'react';
import { Illustration } from '../../Assets/Images';
import StepperItem from '../../Components/StepperItem/StepperItem';
import './Owner.scss';

const Owner: FC = () => {
	return (
		<div className="owner-page">
			<div className="heading-main-group">
				<div className="heading-one">
					<h1>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</h1>
				</div>
				<div className="heading-two">
					<h1>Lorem Ipsum is simply dummy text</h1>
				</div>
			</div>
			<div className="image-main-group">
				<img src={Illustration} alt="" />
			</div>
			<div className="stepper-wrapper">
				<StepperItem stepCounter={1} stepName="Customer will Scan QR Code" />
				<StepperItem
					stepCounter={2}
					stepName="CheckIN notification sent to Cafe Owner"
					isCompleted
				/>
				<StepperItem
					stepCounter={3}
					stepName="Once customer starts using the apps, it makes sure that the customer has paid"
				/>
				<StepperItem
					stepCounter={4}
					stepName="If the customer has not paid , then payment options are shown"
					isLast
				/>
			</div>
			<div className="text-main">
				<h2 className="main-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</h2>
				<h1>Lorem Ipsium is simply a dummy text</h1>
				<h1>Lorem Ipsium is simply a dummy text</h1>
			</div>
		</div>
	);
};

export default Owner;
