import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	GRADES_MAP,
	ROUTES
} from '../utils/constants';

const StudentDetails = () => {
	const { id } = useParams();
	const [student, setStudent] = useState(null);

	const getStudent = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}${API_ENDPOINTS.STUDENTS.GET}/${id}`
			);
			setStudent(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getStudent();
	}, []);

	return (
		<div>
			<h2>
				{student?.first_name} {student?.last_name}
			</h2>
			<div>
				{student?.courses?.map((course) => (
					<div key={course.id}>
						<div>
							{course.name} {course.course_code}
						</div>
						<div>grade: {GRADES_MAP[`${course.StudentCourse.grade}`]}</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default StudentDetails;
