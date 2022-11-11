import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Dashboard = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-3xl font-semibold">Welcome!</h1>
			<div className="flex flex-wrap w-2/3 text-white text-2xl font-medium justify-center">
				<Link to={ROUTES.COURSES}>
					<div className="bg-blue-500 rounded-lg p-6 m-8 text-center">
						View Courses
					</div>
				</Link>
				<Link to={ROUTES.STUDENTS}>
					<div className="bg-blue-500 rounded-lg p-6 m-8 text-center">
						View Students
					</div>
				</Link>
				<Link to={ROUTES.STUDENTS_ADD}>
					<div className="bg-blue-500 rounded-lg p-6 m-8 text-center">
						Add a Student
					</div>
				</Link>
				<Link to={ROUTES.COURSES_ADD}>
					<div className="bg-blue-500 rounded-lg p-6 m-8 text-center">
						Add a Course
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Dashboard;
