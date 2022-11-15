import { useSelector } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Lock from '../assets/lottie/Lock.json';
import Form from '../components/common/Form';
import {
	ROUTES,
	FORM_INPUT_ARRAYS,
	FORM_TYPES,
	DEFAULT_FORM_VALUES,
	FORM_BUTTON_TEXT
} from '../utils/constants';

const Login = () => {
	const user = useSelector(({ UserSlice }) => UserSlice?.user);
	return (
		<>
			{user ? (
				<Navigate to={ROUTES.HOME} />
			) : (
				<div className="flex flex-col items-center justify-center text-center">
					<Lottie
						className="h-1/4 -mt-[6rem]"
						animationData={Lock}
						loop={false}
					/>
					<div className="-mt-[6rem]">
						<h1 className="text-3xl">Login</h1>
						<h2 className="text-xl mt-3">
							or{' '}
							<Link
								to={ROUTES.REGISTER}
								className="hover:text-cyan-500 ease-in-out duration-300"
							>
								Register
							</Link>
						</h2>
					</div>
					<Form
						type={FORM_TYPES.AUTH.LOGIN}
						inputs={FORM_INPUT_ARRAYS.AUTH}
						initialFormState={DEFAULT_FORM_VALUES.LOGIN}
						buttonText={FORM_BUTTON_TEXT.LOGIN}
					/>
				</div>
			)}
			<div className="flex flex-col items-center justify-center text-sm text-slate-400">
				<div>username: admin</div>
				<div>password: admin</div>
			</div>
		</>
	);
};
export default Login;
