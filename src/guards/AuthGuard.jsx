import { Navigate } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {
	const user = useSelector(({ UserSlice }) => UserSlice?.user);

	if (!user) {
		return <Navigate to={ROUTES.LOGIN} />;
	}
	return <>{children}</>;
};

export default AuthGuard;
