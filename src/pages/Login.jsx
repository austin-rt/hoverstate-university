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
			type={FORM_TYPES.LOGIN}
			inputs={FORM_INPUT_ARRAYS.AUTH}
			defaultValues={DEFAULT_FORM_VALUES.LOGIN}
			buttonText={FORM_BUTTON_TEXT.LOGIN}
		/>
	);
};
export default Login;
