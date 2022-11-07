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
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

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
			default:
				break;
		}
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormState({ ...formState, [id]: value });
	};

	return {
		formState,
		isLoading,
		handleChange,
		handleSubmit
	};
};

export default useForm;
