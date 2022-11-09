import Form from '../components/common/Form';
import {
	FORM_INPUT_ARRAYS,
	FORM_TYPES,
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT
} from '../utils/constants';

const Login = () => {
	return (
		<Form
			type={FORM_TYPES.AUTH.LOGIN}
			inputs={FORM_INPUT_ARRAYS.AUTH}
			initialFormState={DEFAULT_FORM_VALUES.LOGIN}
			buttonText={FORM_BUTTON_TEXT.LOGIN}
		/>
	);
};
export default Login;
