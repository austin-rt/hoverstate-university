import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ROUTES } from '../utils/constants';

const NavBar = () => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);
	const { signOutCall } = useAuth();
	return (
		<div className="flex justify-end items-center h-7 w-full text-lg p-10 ">
			<Link to={ROUTES.COURSES} className="m-3">
				Courses
			</Link>
			<Link to={ROUTES.STUDENTS} className="m-3">
				Students
			</Link>
			{user ? (
				<div onClick={signOutCall} className="cursor-pointer">
					Logout
				</div>
			) : (
				<Link to={ROUTES.LOGIN}>Login</Link>
			)}
		</div>
	);
};
export default NavBar;
