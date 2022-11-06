import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const Form = ({ buttonText, endpoint }) => {
	const [formState, setFormState] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormState({
			...formState,
			[id]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`${BASE_URL}/${endpoint}`, formState);
		} catch (err) {
			console.log(err);
		}
	};

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
