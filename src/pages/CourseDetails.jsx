import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	FORM_TYPES,
	API_ENDPOINTS,
	GRADES_MAP,
	ROUTES,
	FORM_BUTTON_TEXT
} from '../utils/constants';
import AssignCourseModal from '../components/common/AssignCourseModal';
import Button from '../components/common/Button';

const CourseDetails = () => {
	const { id } = useParams();
	const [course, setCourse] = useState(null);
	const [assignCourseModalVisibility, toggleAssignCourseModalVisibility] =
		useState(false);

	const getCourse = useCallback(async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}${API_ENDPOINTS.COURSES.GET}/${id}`
			);
			setCourse(res.data);
		} catch (err) {
			console.log(err);
		}
	}, [id]);

	useEffect(() => {
		getCourse();
	}, [getCourse]);

	const handleAddCourseClick = () => {
		toggleAssignCourseModalVisibility(!assignCourseModalVisibility);
	};

	return (
		<div className="flex flex-col m-10 items-center">
			<AssignCourseModal
				assignCourseModalVisibility={assignCourseModalVisibility}
				toggleAssignCourseModalVisibility={toggleAssignCourseModalVisibility}
				dataToEdit={{ ...course, type: FORM_TYPES.GRADE.ADD }}
				getCourse={getCourse}
			/>
			<h2 className="text-2xl mb-5">
				{course?.name} {course?.course_code}
			</h2>
			<div className="flex justify-center" onClick={handleAddCourseClick}>
				<Button buttonText={FORM_BUTTON_TEXT.ASSIGN} />
			</div>
			<div className="flex flex-wrap w-full justify-center">
				{course?.students.map((student) => (
					<div
						key={student.id}
						className={`flex flex-col justify-center items-center m-2 p-2 text-center text-white w-1/4 min-w-[12rem] h-20 rounded-md
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
							<div>Grade: {GRADES_MAP[`${student.StudentCourse.grade}`]}</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default CourseDetails;
