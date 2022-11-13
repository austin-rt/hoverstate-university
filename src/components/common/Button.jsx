import { FORM_BUTTON_TEXT } from '../../utils/constants';

const Button = ({ buttonText = FORM_BUTTON_TEXT.SUBMIT }) => {
	return (
		<button className="text-slate-100 h-14 py-2 px-4 border-2 border-transparent border-solid bg-cyan-500 ease-in-out duration-300 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 rounded-md w-5/6">
			{buttonText}
		</button>
	);
};
export default Button;
