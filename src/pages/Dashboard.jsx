import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Dashboard = () => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);

	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-3xl font-semibold">
				Welcome! {user && user.username}
			</h1>
			<div className="flex flex-wrap w-2/3 text-slate-200 text-2xl font-medium justify-center">
				<Link to={ROUTES.COURSES}>
					<div className="py-2 px-4 m-5 border-2 border-transparent border-solid bg-cyan-500 ease-in-out duration-300 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 rounded-md">
						View Courses
					</div>
				</Link>
				<Link to={ROUTES.STUDENTS}>
					<div className="py-2 px-4 m-5 border-2 border-transparent border-solid bg-cyan-500 ease-in-out duration-300 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 rounded-md">
						View Students
					</div>
				</Link>
				<Link to={ROUTES.STUDENTS_ADD}>
					<div className="py-2 px-4 m-5 border-2 border-transparent border-solid bg-cyan-500 ease-in-out duration-300 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 rounded-md">
						Add a Student
					</div>
				</Link>
				<Link to={ROUTES.COURSES_ADD}>
					<div className="py-2 px-4 m-5 border-2 border-transparent border-solid bg-cyan-500 ease-in-out duration-300 hover:bg-transparent hover:text-cyan-500 hover:border-cyan-500 rounded-md">
						Add a Course
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Dashboard;
