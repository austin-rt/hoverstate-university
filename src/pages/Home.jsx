import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_ENDPOINTS, ROUTES } from '../utils/constants';
import { Link } from 'react-router-dom';

const Home = () => {
	const [courses, setCourses] = useState([]);

	const getCourses = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}/${API_ENDPOINTS.COURSES.GET_ALL}`
			);
			setCourses(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCourses();
	}, []);

	return (
		<div>
			{courses.map((course) => (
				<Link to={`${ROUTES.COURSES}/${course.id}`} key={course.id}>
					<h2>
						{course.name} {course.course_code}
					</h2>
				</Link>
			))}
		</div>
	);
};

export default Home;
