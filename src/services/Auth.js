import { API_ENDPOINTS } from '../utils/constants';
import Client from './api';

export const SignInCall = async (data) => {
	try {
		const res = await Client.post(`${API_ENDPOINTS.AUTH.LOGIN}`, data);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const SignUpCall = async (data) => {
	try {
		const res = await Client.post(`${API_ENDPOINTS.AUTH.REGISTER}`, data);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const CheckSession = async () => {
	try {
		const res = await Client.get(`${API_ENDPOINTS.AUTH.CHECK_SESSION}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};
