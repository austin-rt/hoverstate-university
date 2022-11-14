import Form from '../components/common/Form';
import {
	FORM_TYPES,
	FORM_INPUT_ARRAYS,
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT
} from '../utils/constants';

const Register = () => {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-3xl">Register</h1>
			<Form
				type={FORM_TYPES.AUTH.REGISTER}
				inputs={FORM_INPUT_ARRAYS.AUTH}
				initialFormState={DEFAULT_FORM_VALUES.REGISTER}
				buttonText={FORM_BUTTON_TEXT.REGISTER}
			/>
		</div>
	);
};
export default Register;
