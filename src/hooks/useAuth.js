import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserInformation } from '../redux/UserSlice';
import { ROUTES, API_ENDPOINTS } from '../utils/constants';
import Client from '../services/api';

const useAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signInCall = async (data) => {
		try {
			const res = await Client.post(`${API_ENDPOINTS.AUTH.LOGIN}`, data);
			return res.data;
		} catch (err) {
			throw err;
		}
	};

	const signUpCall = async (data) => {
		try {
			const res = await Client.post(`${API_ENDPOINTS.AUTH.REGISTER}`, data);
			return res.data;
		} catch (err) {
			throw err;
		}
	};

	const signOutCall = () => {
		dispatch(clearUserInformation());
		navigate(ROUTES.LOGIN);
	};

	return { signOutCall, signInCall, signUpCall };
};

export default useAuth;
