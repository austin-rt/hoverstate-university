import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Admin from '../assets/lottie/Admin.json';
import { ROUTES } from '../utils/constants';

const Dashboard = () => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);

	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<Lottie className="w-2/3" animationData={Admin} loop={true} />
			<h1 className="text-4xl font-semibold mb-14">
				Welcome{user && ` ${user.username}`}!
			</h1>
			<div className="flex flex-wrap w-3/4 text-2xl font-medium items-centertext-center justify-center">
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
