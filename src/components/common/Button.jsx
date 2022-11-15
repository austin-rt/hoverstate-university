import { FORM_BUTTON_TEXT } from '../../utils/constants';

const Button = ({ buttonText = FORM_BUTTON_TEXT.SUBMIT }) => {
	return (
		<button
			className={`flex items-center justify-center text-slate-300 py-2 px-4 border-2 border-transparent border-solid rounded-md ease-in-out duration-300 hover:bg-transparent
			${
				buttonText === FORM_BUTTON_TEXT.DELETE
					? `bg-red-500 hover:text-red-500 hover:border-red-500`
					: `bg-cyan-600 hover:text-cyan-600 hover:border-cyan-600 `
			} `}
		>
			{buttonText}
		</button>
	);
};
export default Button;
