import { ChangeEvent, FC, MutableRefObject, useRef } from 'react';
import { UploadIcon } from '../../../Assets/Images';
import './FormInput.scss';

const FormInput: FC<FormInputProps> = ({
	label,
	name,
	handleChange,
	pattern,
	value,
	required,
	type,
	placeholder,
	accept,
	hidden
}) => {
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	return (
		<div className='form-input-body'>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				onChange={handleChange}
				pattern={pattern}
				value={typeof value === 'object' ? '' : value}
				placeholder={placeholder}
				required={required}
				accept={accept}
				hidden={hidden}
				ref={inputRef}
			/>
			{hidden && (
				<div
					className='duplicate-box'
					onClick={() => inputRef.current?.click()}>
					<UploadIcon className='icon' />
					<p className={`text ${value?.name ? 'file-name' : ''}`}>
						{value?.name ? value.name : 'Upload Image'}
					</p>
				</div>
			)}
		</div>
	);
};

export default FormInput;

interface FormInputProps {
	label: string;
	name: string;
	type: 'text' | 'email' | 'password' | 'tel' | 'file';
	accept?: string;
	value: string | number | any;
	placeholder?: string;
	pattern?: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	hidden?: boolean;
	ref?: MutableRefObject<HTMLInputElement>;
	handleClick?: () => void;
}
