import { FORM_BUTTON_TEXT } from '../../utils/constants';

const Button = ({ buttonText = FORM_BUTTON_TEXT.SUBMIT }) => {
	return (
		<button className="bg-blue-500 text-white py-2 px-4 rounded-md w-5/6">
			{buttonText}
		</button>
	);
};
export default Button;
