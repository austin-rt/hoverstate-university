import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import Home from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CourseDetails from '../pages/CourseDetails';
import StudentDetails from '../pages/StudentDetails';
import ViewCourses from '../pages/ViewCourses';
import ViewStudents from '../pages/ViewStudents';
import AddStudent from '../pages/AddStudent';
import AddCourse from '../pages/AddCourse';

export const Navigation = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
			<Route path={ROUTES.COURSES} element={<ViewCourses />} />
			<Route path={ROUTES.COURSES_ADD} element={<AddCourse />} />
			<Route path={ROUTES.STUDENTS_ADD} element={<AddStudent />} />
			<Route path={ROUTES.STUDENTS} element={<ViewStudents />} />
			<Route path={ROUTES.COURSE_BY_ID} element={<CourseDetails />} />
			<Route path={ROUTES.STUDENT_BY_ID} element={<StudentDetails />} />
		</Routes>
	);
};
