import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const Navigation = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
		</Routes>
	);
};
