import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CourseDetails from '../pages/CourseDetails';
import StudentDetails from '../pages/StudentDetails';

export const Navigation = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
			<Route path={ROUTES.COURSE_BY_ID} element={<CourseDetails />} />
			<Route path={ROUTES.STUDENT_BY_ID} element={<StudentDetails />} />
		</Routes>
	);
};
