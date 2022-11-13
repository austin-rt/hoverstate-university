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
					<div
						key={course.id}
						className="flex flex-col justify-center items-center h-[10rem] w-[10rem] border border-solid border-cyan-600 rounded-md p-2 m-1"
					>
						<Link to={`${ROUTES.COURSES}/${course.id}`}>
							<h2 className="text-xl">{course.name}</h2>
							<h3>{course.course_code}</h3>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewCourses;
