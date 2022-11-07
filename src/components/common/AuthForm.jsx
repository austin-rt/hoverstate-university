import useForm from '../../hooks/useForm';
import { DEFAULT_FORM_VALUES } from '../../utils/constants';

const Form = ({ buttonText, type }) => {
	const { handleChange, handleSubmit } = useForm(
		type,
		DEFAULT_FORM_VALUES.AUTH
	);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="username"
					placeholder="username"
					onChange={handleChange}
				/>
				<input
					type="password"
					id="password"
					placeholder="password"
					onChange={handleChange}
				/>
				<button>{buttonText}</button>
			</form>
		</div>
	);
};
export default Form;
