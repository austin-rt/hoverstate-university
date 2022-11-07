import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Dashboard = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full">
			<h1 className="text-3xl font-semibold">Welcome!</h1>
			<div className="flex text-white text-2xl font-medium">
				<div className="bg-blue-500 rounded-lg p-4 m-8">
					<Link to={ROUTES.COURSES}>View Courses</Link>
				</div>
				<div className="bg-blue-500 rounded-lg p-4 m-8">
					<Link to={ROUTES.STUDENTS}>View Students</Link>
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
