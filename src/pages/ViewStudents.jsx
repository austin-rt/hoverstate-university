import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	ROUTES,
	GRADES_MAP,
	FORM_BUTTON_TEXT
} from '../utils/constants';
import { getGrades, average } from '../utils/helpers';
import Button from '../components/common/Button';

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
		<div className="flex flex-col flex-wrap w-full h-full justify-center items-center text-center text-slate-300">
			<h1 className="text-4xl mb-5">Students</h1>
			<div className="flex justify-center w-1/3 mb-5">
				<Link to={ROUTES.STUDENTS_ADD}>
					<Button buttonText={FORM_BUTTON_TEXT.ADD_STUDENT} />
				</Link>
			</div>
			<div className="flex flex-wrap justify-center w-full">
				{students?.map((student) => (
					<div
						key={student.id}
						className="flex flex-col justify-start items-center h-max-content w-1/5 min-w-[20rem] border border-solid hover:border-cyan-500 bg-transparent text-sm rounded-md m-4"
					>
						<Link to={`${ROUTES.STUDENTS}/${student.id}`} className="w-full">
							<div className="flex flex-col justify-center items-center bg-cyan-600 h-20 text-lg w-full rounded-t-md hover:bg-transparent ease-in-out duration-300 border-b border-transparent border-solid hover:text-cyan-500 hover:border-cyan-500">
								<div className="w-full flex flex-col justify-center items-center text-2xl">
									{student.first_name} {student.last_name}
									<div className="text-sm">
										GPA:
										<span
											className={`font-bold m-2
											${parseFloat(average(getGrades(student)).toFixed(2)) <= 1 ? `text-red-400` : ''}
											${
												parseFloat(average(getGrades(student)).toFixed(2)) <=
													2 &&
												parseFloat(average(getGrades(student)).toFixed(2)) > 1
													? `text-orange-400`
													: ''
											}
											${
												parseFloat(average(getGrades(student)).toFixed(2)) <=
													3 &&
												parseFloat(average(getGrades(student)).toFixed(2)) > 2
													? `text-yellow-400`
													: ''
											}
											${
												parseFloat(average(getGrades(student)).toFixed(2)) >= 3
													? `text-green-400`
													: ''
											}`}
										>
											{parseFloat(average(getGrades(student)).toFixed(2))}
										</span>
									</div>
								</div>
								<div className="w-full mt-1 flex justify-center">
									<div className="text-sm">{student.email}</div>
								</div>
							</div>
						</Link>
						<div className="w-full">
							<div className="text-xl">Courses:</div>
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
