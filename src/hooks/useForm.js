import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	FORM_TYPES,
	ROUTES
} from '../utils/constants';

const useForm = (
	type,
	initialFormState = {
		username: '',
		password: ''
	}
) => {
	const navigate = useNavigate();

	const [formState, setFormState] = useState(initialFormState);

	const handleSubmit = async (e) => {
		e.preventDefault();

		switch (type) {
			case FORM_TYPES.LOGIN:
				try {
					await axios.post(`${BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, formState);
					navigate(ROUTES.HOME);
				} catch (err) {
					console.log(err);
				}
				break;
			case FORM_TYPES.REGISTER:
				try {
					await axios.post(
						`${BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`,
						formState
					);
					navigate(ROUTES.LOGIN);
				} catch (err) {
					console.log(err);
				}
				break;
			case FORM_TYPES.GRADE:
				try {
					await axios.put(
						`${BASE_URL}${API_ENDPOINTS.STUDENT_COURSES.EDIT_GRADE}`,
						formState
					);
				} catch (err) {
					console.log(err);
				}
				break;
			default:
				break;
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	return {
		formState,
		setFormState,
		handleChange,
		handleSubmit
	};
};

export default useForm;
