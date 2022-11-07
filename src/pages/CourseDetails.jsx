import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	GRADES_MAP,
	ROUTES
} from '../utils/constants';

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
		<div className="flex flex-col m-10">
			<h2 className="text-2xl mb-5">
				{course?.name} {course?.course_code}
			</h2>
			<div className="flex flex-wrap">
				{course?.students.map((student) => (
					<div
						key={student.id}
						className={`flex flex-col justify-center items-center m-2 p-2 text-center text-white w-1/6 rounded-md
            ${student.StudentCourse.grade === 0 && `bg-red-500`}
            ${student.StudentCourse.grade === 1 && `bg-orange-500`}
            ${student.StudentCourse.grade === 2 && `bg-yellow-500`}
            ${student.StudentCourse.grade === 3 && `bg-green-500`}
            ${student.StudentCourse.grade === 4 && `bg-green-600`}
            `}
					>
						<Link to={`${ROUTES.STUDENTS}/${student.id}`}>
							<div>
								{student.first_name} {student.last_name}
							</div>
							<div>grade: {GRADES_MAP[`${student.StudentCourse.grade}`]}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default CourseDetails;
