import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import Home from '../pages/Home';

export const Navigation = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
		</Routes>
	);
};
