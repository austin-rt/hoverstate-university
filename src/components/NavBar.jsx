import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ROUTES } from '../utils/constants';

const NavBar = () => {
	const user = useSelector(({ UserSlice }) => UserSlice.user);
	const { signOutCall } = useAuth();
	return (
		<div className="flex justify-end items-center h-7 w-full text-lg p-10">
			<Link
				to={ROUTES.HOME}
				className="m-3 hover:text-cyan-500 ease-in-out duration-300"
			>
				Dashboard
			</Link>
			<Link
				to={ROUTES.COURSES}
				className="m-3 hover:text-cyan-500 ease-in-out duration-300"
			>
				Courses
			</Link>
			<Link
				to={ROUTES.STUDENTS}
				className="m-3 hover:text-cyan-500 ease-in-out duration-300"
			>
				Students
			</Link>
			{user ? (
				<div
					onClick={signOutCall}
					className="m-3 cursor-pointer hover:text-cyan-500 ease-in-out duration-300"
				>
					Logout
				</div>
			) : (
				<Link to={ROUTES.LOGIN}>Login</Link>
			)}
		</div>
	);
};
export default NavBar;
