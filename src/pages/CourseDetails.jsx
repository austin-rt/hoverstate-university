import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, API_ENDPOINTS, GRADES_MAP } from '../utils/constants';

const CourseDetails = () => {
	const { id } = useParams();
	const [course, setCourse] = useState(null);

	const getCourse = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}${API_ENDPOINTS.COURSES.GET}/${id}`
			);
			setCourse(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCourse();
	}, []);

	return (
		<div>
			<h2>
				{course?.name} {course?.course_code}
			</h2>
			<div>
				{course?.students.map((student) => (
					<div key={student.id}>
						<div>
							{student.first_name} {student.last_name}
						</div>
						<div>grade: {GRADES_MAP[`${student.StudentCourse.grade}`]}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default CourseDetails;
