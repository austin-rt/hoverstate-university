import Form from '../components/common/Form';
import {
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../utils/constants';

const AddCourse = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full">
			<h1 className="text-3xl mb-5">Add a Course to the Registery</h1>
			<div className="flex flex-col justify-start items-center h-3/4 w-1/3 min-w-[15rem] border border-solid border-cyan-600 bg-transparent text-sm rounded-md m-1">
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
