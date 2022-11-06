import AuthForm from '../components/common/AuthForm';
import { API_ENDPOINTS } from '../utils/constants';

const Register = () => {
	return (
		<AuthForm buttonText="Register" endpoint={API_ENDPOINTS.AUTH.REGISTER} />
	);
};
export default Register;
