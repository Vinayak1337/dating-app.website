import { FC, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SignIn, SignUp } from '../../Components/Auth';
import './Auth.scss';

const Auth: FC<RouteComponentProps> = ({ history }) => {
	const [page, setPage] = useState<string>('');

	useEffect(
		() => {
			setPage(history.location.pathname);
		},
		[history.location.pathname]
	);
	return (
		<div className="auth-main-page">
			{page === '/signup' ? <SignUp /> : <SignIn />}
		</div>
	);
};

export default withRouter(Auth);
