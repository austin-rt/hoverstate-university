import Form from '../components/common/Form';
import {
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../utils/constants';

const AddStudent = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div>Add a Student to the registery</div>
			<div>
				<Form
					inputs={FORM_INPUT_ARRAYS.STUDENT}
					type={FORM_TYPES.STUDENT.ADD}
					initialFormState={DEFAULT_FORM_VALUES.STUDENT}
					buttonText={FORM_BUTTON_TEXT.SUBMIT}
				/>
			</div>
		</div>
	);
};
export default AddStudent;
