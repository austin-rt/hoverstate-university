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
		<div className="flex flex-wrap w-full h-full justify-center text-center">
			<h1 className="text-3xl mb-10">Students</h1>
			<div className="flex flex-wrap justify-center w-full">
				{students?.map((student) => (
					<div
						key={student.id}
						className="flex flex-col justify-start items-center h-max-content w-1/5 min-w-[15rem] border border-solid bg-blue-500 text-white text-sm rounded-md m-1"
					>
						<h2 className="flex justify-center items-center bg-gray-500 h-12 text-lg w-full rounded-t-md">
							<Link to={`${ROUTES.STUDENTS}/${student.id}`}>
								{student.first_name} {student.last_name}
							</Link>
						</h2>
						<div className="w-full">
							<div className="text-base">Courses:</div>
							<div className="flex flex-col items-center">
								{student.courses.map((course) => (
									<div
										key={course.id}
										className={`m-2 p-2 text-center text-white w-5/6 rounded-md
                      ${course.StudentCourse.grade === 0 && `bg-red-500`}
            ${course.StudentCourse.grade === 1 && `bg-orange-500`}
            ${course.StudentCourse.grade === 2 && `bg-yellow-500`}
            ${course.StudentCourse.grade === 3 && `bg-green-500`}
            ${course.StudentCourse.grade === 4 && `bg-green-600`}
                    `}
									>
										<Link to={`${ROUTES.COURSES}/${course.id}`}>
											<div>{course.name} </div>
										</Link>
										<div>{course.course_code}</div>
										<div>
											Grade: {GRADES_MAP[`${course.StudentCourse.grade}`]}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ViewStudents;
