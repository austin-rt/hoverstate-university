import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const NavBar = () => {
	return (
		<div className="flex justify-end items-center h-14 w-full bg-gradient-to-b from-slate-700 to-slate-800 text-white text-lg p-10 mb-10">
			<Link to={ROUTES.COURSES} className="m-5">
				Courses
			</Link>
			<Link to={ROUTES.STUDENTS}>Students</Link>
		</div>
	);
};
export default NavBar;
