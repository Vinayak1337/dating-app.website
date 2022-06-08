import { FC } from 'react';
import { LoadingIcon } from '../../../Assets/Images';
import './FormButton.scss';

const FormButton: FC<FormButtonProps> = ({
	type,
	handleClick,
	className,
	isLoading,
	content
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			disabled={isLoading}
			className={`form-button ${className}`}>
			{!isLoading ? content : <LoadingIcon className="loading-icon" />}
		</button>
	);
};

export default FormButton;
