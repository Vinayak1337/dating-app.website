import { FC } from 'react';
import './SelectOption.scss';

const SelectYearOption: FC<SelectOptionProps> = ({ label, handleChange }) => {
	return (
		<div
			className="select-option-body"
			onClick={() => {
				handleChange(label);
			}}>
			<input
				type="radio"
				name="select-year-option-name"
				className="select-option-radio"
				id={label}
			/>
			<label htmlFor={label}>
				{label}
			</label>
		</div>
	);
};

export default SelectYearOption;
