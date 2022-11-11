import Form from '../components/common/Form';
import {
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../utils/constants';

const AddCourse = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<div>Add a course to the registery</div>
			<div>
				<Form
					inputs={FORM_INPUT_ARRAYS.COURSE}
					type={FORM_TYPES.COURSE.ADD}
					initialFormState={DEFAULT_FORM_VALUES.COURSE}
					buttonText={FORM_BUTTON_TEXT.SUBMIT}
				/>
			</div>
		</div>
	);
};
export default AddCourse;
