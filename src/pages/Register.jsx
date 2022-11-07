import AuthForm from '../components/common/AuthForm';
import { FORM_TYPES } from '../utils/constants';

const Register = () => {
	return <AuthForm buttonText="Register" type={FORM_TYPES.REGISTER} />;
};
export default Register;
