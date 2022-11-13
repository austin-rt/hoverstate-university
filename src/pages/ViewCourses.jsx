import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL, API_ENDPOINTS, ROUTES } from '../utils/constants';
import { Link } from 'react-router-dom';

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
		<div className="flex flex-wrap w-full h-full justify-center text-center">
			<h1 className="text-4xl mb-5">Current Courses</h1>
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
