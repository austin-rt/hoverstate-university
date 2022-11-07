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
		<div className="flex flex-col items-center mt-10">
			<h1 className="text-3xl">
				{student?.first_name} {student?.last_name}
			</h1>
			<div className="flex flex-wrap w-full">
				{student?.courses?.map((course) => (
					<div
						key={course.id}
						className={`flex flex-col justify-center items-center m-4 p-4 text-center text-white w-1/4 rounded-md
            ${course.StudentCourse.grade === 0 && `bg-red-500`}
            ${course.StudentCourse.grade === 1 && `bg-orange-500`}
            ${course.StudentCourse.grade === 2 && `bg-yellow-500`}
            ${course.StudentCourse.grade === 3 && `bg-green-500`}
            ${course.StudentCourse.grade === 4 && `bg-green-600`}
            `}
					>
						<Link to={`${ROUTES.COURSES}/${course.id}`}>
							<div>{course.name} </div>
							<div> {course.course_code}</div>
							<div>Grade: {GRADES_MAP[`${course.StudentCourse.grade}`]}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default StudentDetails;
