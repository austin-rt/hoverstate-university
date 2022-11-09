import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
	FORM_BUTTON_TEXT,
	FORM_INPUT_ARRAYS,
	FORM_TYPES
} from '../../utils/constants';
import Form from './Form';

const FormModal = ({
	modalVisibility,
	toggleModalVisibility,
	dataToEdit,
	wasEdited,
	setWasEdited
}) => {
	if (!modalVisibility) return null;

	const closeModal = () => {
		toggleModalVisibility(false);
	};

	return (
		<div className="absolute w-2/3 h-1/3 flex flex-col justify-start bg-gray-500 text-white rounded-lg">
			<div>
				<AiOutlineCloseCircle
					onClick={closeModal}
					className="cursor-pointer text-3xl mt-5 ml-5"
				/>
			</div>
			<Form
				type={FORM_TYPES.GRADE}
				inputs={FORM_INPUT_ARRAYS.GRADE}
				buttonText={FORM_BUTTON_TEXT.SUBMIT}
				dataToEdit={dataToEdit}
				closeModal={closeModal}
				wasEdited={wasEdited}
				setWasEdited={setWasEdited}
			/>
		</div>
	);
};
export default FormModal;
