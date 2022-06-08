import { FC } from 'react';
import './Error.scss';

const Error: FC = () => {
	return (
		<div className="error-body">
			<div className="error-page">
				<p>
					404 <span /> Page Not Found
				</p>
			</div>
		</div>
	);
};

export default Error;
