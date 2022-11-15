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
import AuthGuard from '../guards/AuthGuard';

export const Navigation = () => {
	return (
		<Routes>
			<Route
				path={ROUTES.HOME}
				element={
					<AuthGuard>
						<Home />
					</AuthGuard>
				}
			/>
			<Route path={ROUTES.LOGIN} element={<Login />} />
			<Route path={ROUTES.REGISTER} element={<Register />} />
			<Route
				path={ROUTES.COURSES}
				element={
					<AuthGuard>
						<ViewCourses />
					</AuthGuard>
				}
			/>
			<Route
				path={ROUTES.COURSES_ADD}
				element={
					<AuthGuard>
						<AddCourse />
					</AuthGuard>
				}
			/>
			<Route
				path={ROUTES.STUDENTS_ADD}
				element={
					<AuthGuard>
						<AddStudent />
					</AuthGuard>
				}
			/>
			<Route
				path={ROUTES.STUDENTS}
				element={
					<AuthGuard>
						<ViewStudents />
					</AuthGuard>
				}
			/>
			<Route
				path={ROUTES.COURSE_BY_ID}
				element={
					<AuthGuard>
						<CourseDetails />
					</AuthGuard>
				}
			/>
			<Route
				path={ROUTES.STUDENT_BY_ID}
				element={
					<AuthGuard>
						<StudentDetails />
					</AuthGuard>
				}
			/>
		</Routes>
	);
};
