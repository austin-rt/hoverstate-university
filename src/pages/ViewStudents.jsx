import { useState, useEffect } from 'react';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	ROUTES,
	GRADES_MAP,
	FORM_BUTTON_TEXT
} from '../utils/constants';
import { Link } from 'react-router-dom';

const ViewStudents = () => {
	const [students, setStudents] = useState();

	const getStudents = async () => {
		try {
			const res = await axios.get(`${BASE_URL}${API_ENDPOINTS.STUDENTS.GET}`);
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
						className="flex flex-col justify-start items-center h-max-content w-1/5 min-w-[15rem] border border-solid bg-transparent text-sm rounded-md m-1"
					>
						<h2 className="flex justify-center items-center bg-cyan-500 h-12 text-lg w-full rounded-t-md">
							<Link to={`${ROUTES.STUDENTS}/${student.id}`}>
								{student.first_name} {student.last_name}
							</Link>
						</h2>
						<div className="w-full">
							<div className="text-base">Courses:</div>
							<div className="flex flex-col items-center">
								{student.courses.map((course) => (
									<Link
										to={`${ROUTES.COURSES}/${course.id}`}
										key={course.id}
										className="flex flex-col items-center w-full"
									>
										<div
											className={
												'm-2 p-2 text-center w-5/6 rounded-md border border-solid border-cyan-500 hover:border-slate-300 ease-in-out duration-300 hover:text-cyan-500'
											}
										>
											<div>{course.course_code}</div>
											<div>
												Grade:{' '}
												<span
													className={` font-bold
													${course.StudentCourse.grade === 0 && `text-red-500`}
            							${course.StudentCourse.grade === 1 && `text-orange-500`}
            							${course.StudentCourse.grade === 2 && `text-yellow-500`}
            							${course.StudentCourse.grade === 3 && `text-green-600`}
            							${course.StudentCourse.grade === 4 && `text-green-500`}
                    		`}
												>
													{GRADES_MAP[`${course.StudentCourse.grade}`]}
												</span>
											</div>
										</div>
									</Link>
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
