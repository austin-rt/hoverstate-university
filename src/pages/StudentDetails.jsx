import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	GRADES_MAP,
	ROUTES,
	FORM_BUTTON_TEXT,
	FORM_TYPES
} from '../utils/constants';
import EditGradeFormModal from '../components/common/EditGradeFormModal';
import Button from '../components/common/Button';
import AssignCourseModal from '../components/common/AssignCourseModal';

const StudentDetails = () => {
	console.log('rendered');

	const { id: studentId } = useParams();

	const [student, setStudent] = useState(null);
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [editGradeModalVisibility, toggleEditGradeModalVisibility] =
		useState(false);
	const [assignCourseModalVisibility, toggleAssignCourseModalVisibility] =
		useState(false);

	const getStudent = useCallback(async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}${API_ENDPOINTS.STUDENTS.GET}/${studentId}`
			);
			setStudent({ ...res.data });
		} catch (err) {
			console.log(err);
		}
	}, [studentId, editGradeModalVisibility, assignCourseModalVisibility]);

	const handleEditClick = (course) => {
		toggleEditGradeModalVisibility(!editGradeModalVisibility);
		setSelectedCourse({ course: [{ ...course }], student });
	};

	const handleAddCourseClick = () => {
		toggleAssignCourseModalVisibility(!assignCourseModalVisibility);
	};

	useEffect(() => {
		getStudent();
	}, [getStudent]);

	return (
		<div className="flex flex-col items-center mt-10">
			<AssignCourseModal
				assignCourseModalVisibility={assignCourseModalVisibility}
				toggleAssignCourseModalVisibility={toggleAssignCourseModalVisibility}
				dataToEdit={{ ...student, type: FORM_TYPES.COURSE.ASSIGN }}
				getStudent={getStudent}
			/>
			<EditGradeFormModal
				editGradeModalVisibility={editGradeModalVisibility}
				toggleEditGradeModalVisibility={toggleEditGradeModalVisibility}
				dataToEdit={{ ...selectedCourse, type: FORM_TYPES.GRADE.EDIT }}
				getStudent={getStudent}
			/>
			<h1 className="text-3xl mb-5">
				{student?.first_name} {student?.last_name}
			</h1>
			<div className="flex justify-center" onClick={handleAddCourseClick}>
				<Button buttonText={FORM_BUTTON_TEXT.ASSIGN} />
			</div>
			<div className="flex flex-wrap w-full justify-center">
				{student?.courses?.map((course) => (
					<div
						key={course.id}
						className={`flex flex-col justify-center items-center min-w-[15rem] m-4 p-4 text-center text-white w-1/4 rounded-md
            ${course.StudentCourse.grade === 0 && `bg-red-500`}
            ${course.StudentCourse.grade === 1 && `bg-orange-500`}
            ${course.StudentCourse.grade === 2 && `bg-yellow-500`}
            ${course.StudentCourse.grade === 3 && `bg-green-600`}
            ${course.StudentCourse.grade === 4 && `bg-green-500`}
            `}
					>
						<Link to={`${ROUTES.COURSES}/${course.id}`}>
							<div>{course.name} </div>
							<div> {course.course_code}</div>
						</Link>
						<div>Grade: {GRADES_MAP[`${course.StudentCourse.grade}`]}</div>
						<button
							onClick={() => handleEditClick(course)}
							className="bg-gray-500 py-1 px-4 mt-2 rounded-md"
						>
							Edit Grade
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default StudentDetails;
