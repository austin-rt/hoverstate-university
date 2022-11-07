import { useState, useEffect } from 'react';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	ROUTES,
	GRADES_MAP
} from '../utils/constants';
import { Link } from 'react-router-dom';

const ViewStudents = () => {
	const [students, setStudents] = useState();

	const getStudents = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/${API_ENDPOINTS.STUDENTS.GET}`);
			setStudents(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getStudents();
	}, []);

	return (
		<div>
			{students?.map((student) => (
				<Link to={`${ROUTES.STUDENTS}/${student.id}`} key={student.id}>
					<h2>
						{student.first_name} {student.last_name}
					</h2>
					<div>
						courses:
						<div>
							{student.courses.map((course) => (
								<div key={course.id}>
									<div>
										{course.name} {course.course_code} grade:{' '}
										{GRADES_MAP[`${course.StudentCourse.grade}`]}
									</div>
								</div>
							))}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ViewStudents;
