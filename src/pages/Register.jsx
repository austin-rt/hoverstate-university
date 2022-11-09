import Form from '../components/common/Form';
import {
	FORM_TYPES,
	FORM_INPUT_ARRAYS,
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT
} from '../utils/constants';

const Register = () => {
	return (
		<Form
			type={FORM_TYPES.AUTH.REGISTER}
			inputs={FORM_INPUT_ARRAYS.AUTH}
			initialFormState={DEFAULT_FORM_VALUES.REGISTER}
			buttonText={FORM_BUTTON_TEXT.REGISTER}
		/>
	);
};
export default Register;
