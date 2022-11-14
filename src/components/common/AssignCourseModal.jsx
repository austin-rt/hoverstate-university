import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../../utils/constants';
import Form from './Form';

const AssignCourseModal = ({
	assignCourseModalVisibility,
	toggleAssignCourseModalVisibility,
	dataToEdit,
	getCourse
}) => {
	if (!assignCourseModalVisibility) return null;

	const closeModal = () => {
		toggleAssignCourseModalVisibility(false);
	};

	return (
		<div className="fixed w-2/3 max-w-md h-1/3 flex flex-col justify-start bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg border border-solid border-cyan-500">
			<div>
				<AiOutlineCloseCircle
					onClick={closeModal}
					className="cursor-pointer text-3xl mt-5 ml-5"
				/>
			</div>
			<Form
				type={FORM_TYPES.GRADE.ADD}
				inputs={FORM_INPUT_ARRAYS.GRADE}
				closeModal={closeModal}
				initialFormState={dataToEdit}
				buttonText={FORM_BUTTON_TEXT.ASSIGN}
				dataToEdit={dataToEdit}
				getData={getCourse}
			/>
		</div>
	);
};
export default AssignCourseModal;
