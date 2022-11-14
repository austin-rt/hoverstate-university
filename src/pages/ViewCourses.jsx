import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	ROUTES,
	FORM_BUTTON_TEXT
} from '../utils/constants';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const ViewCourses = () => {
	const [courses, setCourses] = useState([]);

	const getCourses = useCallback(async () => {
		try {
			const res = await axios.get(`${BASE_URL}${API_ENDPOINTS.COURSES.GET}`);
			setCourses(res.data);
		} catch (err) {
			console.log(err);
		}
	}, []);

	useEffect(() => {
		getCourses();
	}, [getCourses]);

	return (
		<div className="flex flex-col flex-wrap w-full h-full justify-center items-center text-center">
			<h1 className="text-4xl mb-5">Current Courses</h1>
			<div className="flex justify-center w-1/3 mb-5">
				<Link to={ROUTES.COURSES_ADD}>
					<Button buttonText={FORM_BUTTON_TEXT.ADD_COURSE} />
				</Link>
			</div>
			<div className="flex flex-wrap justify-center">
				{courses.map((course) => (
					<Link
						to={`${ROUTES.COURSES}/${course.id}`}
						key={course.id}
						className="flex flex-col justify-center items-center h-[10rem] w-[10rem] hover:text-cyan-500 border-2 border-solid ease-in-out duration-300 border-cyan-600 hover:border-slate-300 rounded-md p-2 m-2 "
					>
						<h2 className="text-xl">{course.name}</h2>
						<h3 className="">{course.course_code}</h3>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ViewCourses;
