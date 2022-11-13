import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../../utils/constants';
import Form from './Form';

const EditGradeFormModal = ({
	editGradeModalVisibility,
	toggleEditGradeModalVisibility,
	dataToEdit,
	getStudent
}) => {
	if (!editGradeModalVisibility) return null;

	const closeModal = () => {
		toggleEditGradeModalVisibility(false);
	};

	return (
		<div className="fixed w-3/4 h-1/3 flex flex-col justify-start bg-gray-500 text-white rounded-lg">
			<div>
				<AiOutlineCloseCircle
					onClick={closeModal}
					className="cursor-pointer text-3xl mt-5 ml-5"
				/>
			</div>
			<Form
				type={FORM_TYPES.GRADE.EDIT}
				inputs={FORM_INPUT_ARRAYS.GRADE}
				initialFormValues={DEFAULT_FORM_VALUES.GRADE}
				buttonText={FORM_BUTTON_TEXT.SUBMIT}
				dataToEdit={dataToEdit}
				closeModal={closeModal}
				getData={getStudent}
			/>
		</div>
	);
};
export default EditGradeFormModal;
