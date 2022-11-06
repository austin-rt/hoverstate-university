import AuthForm from '../components/common/AuthForm';
import { API_ENDPOINTS } from '../utils/constants';

const Login = () => {
	return <AuthForm buttonText="Login" endpoint={API_ENDPOINTS.AUTH.LOGIN} />;
};
export default Login;
