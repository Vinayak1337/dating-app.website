/// <reference types="react-scripts" />

interface StepperItemProps {
	stepCounter: number;
	stepName: string;
	isCompleted?: boolean;
	isLast?: boolean;
}

interface AppState {
	logos: AppLogos;
}

interface AppLogos {
	headerLogo: string;
	footerLogo: string;
	adminLogo: string;
}

interface RootState {
	logoReducer: LogoReducer;
}

interface NavbarState {
	route: string;
	showContact: boolean;
	navbarActive: boolean;
}

interface ContactFormProps {
	handleClose: () => void;
}

interface ContactFormState {
	name: string;
	email: string;
	phoneNo: string;
	message: string;
	isLoading: boolean;
	showMessageBar: boolean;
	messageType: MessageBarType;
	messageBarMsg: string;
	messageTime?: number;
}

type ContactFormNewState =
	| {
			[key: 'email' | 'name' | 'phoneNo' | 'message' | 'messageBarMsg']: string;
		}
	| {
			isLoading: boolean;
		}
	| {
			showMessageBar: boolean;
			messageType: MessageBarType;
			messageBarMsg: string;
			messageTime?: number;
		};

type NavbarNewState =
	| {
			route: string;
		}
	| {
			[key: 'showContact' | 'navbarActive']: boolean;
		};
interface NavbarProps {
	headerLogo: string;
}

type MessageBarType = 'error' | 'info' | 'success' | 'warning';

interface FooterState {
	input: string;
	isLoading: boolean;
	error: string;
	message: string;
	showMessageBar: boolean;
	messageType: MessageBarType;
	messageTime?: number;
}

type FooterNewState =
	| {
			input: string;
		}
	| {
			isLoading: boolean;
		}
	| {
			error: string;
		}
	| {
			message: string;
			messageType: MessageBarType;
			showMessageBar: boolean;
			messageTime?: number;
		};

interface MessageBarProps {
	type: MessageBarType;
	message: string;
	handleClose: () => void;
	time?: number;
}

interface FooterProps {
	footerLogo: string;
}

interface LogoReducer {
	logos: AppLogos;
}

interface AppProps {
	setLogos: (logos: AppLogos) => void;
}

type LogoReducerActions =
	| {
			type: 'set_logos';
			payload: AppLogos;
		}
	| {
			type: 'set_header_logo' | 'set_footer_logo' | 'set_admin_logo';
			payload: string;
		};

interface SignUpState {
	cafeName: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	location: string;
	city: string;
	country: string;
	image: null | HTMLInputElement.files;
	isLoading: boolean;
	showMessageBar: boolean;
	message: string;
	messageType: MessageBarType;
	messageTime: number;
	selectCountryActive: boolean;
}

type SignUpNewState =
	| {
			[key:
				| 'cafeName'
				| 'firstName'
				| 'lastName'
				| 'email'
				| 'phoneNumber'
				| 'location'
				| 'city'
				| 'country'
				| 'image']: string;
		}
	| {
			isLoading: boolean;
		}
	| {
			showMessageBar: boolean;
			message: string;
			messageType: MessageBarType;
			messageTime: number;
		};

interface FormButtonProps {
	type: 'submit' | 'button';
	isLoading: boolean;
	content: any;
	className?: string;
	handleClick?: () => void;
}

interface SelectOptionProps {
	label: string;
	handleChange: (value: string) => void;
}

interface SelectInputProps {
	isActive: boolean;
	compId: string;
	selectOptions: string[];
	selectedOption: string;
	toggleSelect: (value?: boolean) => void;
	handleChange: (value: string) => void;
}
