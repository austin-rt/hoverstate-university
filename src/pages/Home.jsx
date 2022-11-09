import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Dashboard = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-3xl font-semibold">Welcome!</h1>
			<div className="flex text-white text-2xl font-medium">
				<Link to={ROUTES.COURSES}>
					<div className="bg-blue-500 rounded-lg p-4 m-8">View Courses</div>
				</Link>
				<Link to={ROUTES.STUDENTS}>
					<div className="bg-blue-500 rounded-lg p-4 m-8">View Students</div>
				</Link>
			</div>
		</div>
	);
};
export default Dashboard;
