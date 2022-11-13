import { Link, Routes } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const NavBar = () => {
	return (
		<div className="flex justify-end items-center h-7 w-full text-lg p-10 ">
			<Link to={ROUTES.COURSES} className="m-3">
				Courses
			</Link>
			<Link to={ROUTES.STUDENTS} className="m-3">
				Students
			</Link>
		</div>
	);
};
export default NavBar;
