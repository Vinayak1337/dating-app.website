import { CSSProperties, FC } from 'react';
import {
	CloseIcon,
	ErrorIcon,
	InfoIcon,
	SuccessIcon,
	WarningIcon
} from '../../../Assets/Images';
import './MessageBar.scss';

const MessageBar: FC<MessageBarProps> = ({
	type,
	handleClose,
	message,
	time
}) => {
	const getIcon = () => {
		switch (type) {
			case 'error':
				return <ErrorIcon className="icon main-icon" />;

			case 'warning':
				return <WarningIcon className="icon main-icon" />;

			case 'info':
				return <InfoIcon className="icon main-icon" />;

			case 'success':
				return <SuccessIcon className="icon main-icon" />;
		}
	};

	const closingProgressBarStyles: CSSProperties = {
		animation: `progress-keyframe ${time || '3'}s`
	};

	const closingProgressDotStyles: CSSProperties = {
		animation: `closing-keyframe ${time || '3'}s`
	};

	return (
		<div className="message-bar">
			<div className={`message-bar-container ${type}`}>
				{getIcon()}
				<p>
					{message}
				</p>
				<CloseIcon className="icon close-icon" onClick={handleClose} />
				<div className="closing-progress-container">
					<span style={closingProgressBarStyles} className="closing-progress-bar" />
					<span style={closingProgressDotStyles} className="closing-progress-dot" />
				</div>
			</div>
		</div>
	);
};

export default MessageBar;
