import AuthForm from '../components/common/AuthForm';
import { API_ENDPOINTS, FORM_TYPES } from '../utils/constants';

const Login = () => {
	return <AuthForm buttonText="Login" type={FORM_TYPES.LOGIN} />;
};
export default Login;
