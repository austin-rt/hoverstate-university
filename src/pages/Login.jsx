import Form from '../components/common/Form';
import {
	FORM_INPUT_ARRAYS,
	FORM_TYPES,
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT
} from '../utils/constants';

const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-3xl">Login</h1>
			<Form
				type={FORM_TYPES.AUTH.LOGIN}
				inputs={FORM_INPUT_ARRAYS.AUTH}
				initialFormState={DEFAULT_FORM_VALUES.LOGIN}
				buttonText={FORM_BUTTON_TEXT.LOGIN}
			/>
		</div>
	);
};
export default Login;
