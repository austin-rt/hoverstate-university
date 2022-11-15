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
import { average, getGrades } from '../utils/helpers';
import EditGradeFormModal from '../components/common/EditGradeFormModal';
import Button from '../components/common/Button';
import AssignCourseModal from '../components/common/AssignCourseModal';

const StudentDetails = () => {
	const { id: studentId } = useParams();

	const [student, setStudent] = useState(null);
	const [studentGPA, setStudentGPA] = useState(null);
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
			setStudentGPA(parseFloat(average(getGrades(res.data)).toFixed(2)));
		} catch (err) {
			console.log(err);
		}
		// eslint-disable-next-line
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
				dataToEdit={{ ...student, type: FORM_TYPES.GRADE.ADD }}
				getData={getStudent}
			/>
			<EditGradeFormModal
				editGradeModalVisibility={editGradeModalVisibility}
				toggleEditGradeModalVisibility={toggleEditGradeModalVisibility}
				dataToEdit={{ ...selectedCourse, type: FORM_TYPES.GRADE.EDIT }}
				getData={getStudent}
			/>

			<h1 className="text-3xl mb-2">
				{student?.first_name} {student?.last_name}
			</h1>
			<h2 className="rounded-md p-2 mb-2">
				GPA:{' '}
				<span
					className={`font-bold
					${studentGPA <= 1 ? `text-red-500` : ''}
					${studentGPA > 1 && studentGPA <= 2 ? `text-orange-500` : ''}
					${studentGPA > 2 && studentGPA <= 3 ? `text-yellow-500` : ''}
					${studentGPA >= 3 ? `text-green-500` : ''}
					`}
				>{` ${studentGPA}`}</span>
			</h2>
			<div className="flex justify-center mb-5" onClick={handleAddCourseClick}>
				<Button buttonText={FORM_BUTTON_TEXT.ASSIGN} />
			</div>
			<div className="flex flex-wrap w-full justify-center">
				{student?.courses?.map((course) => (
					<div
						key={course.id}
						className={`flex flex-col justify-center items-center min-w-[15rem] m-4 p-4 text-center w-1/4 rounded-md hover:text-cyan-500 border-2 border-solid ease-in-out duration-300 border-cyan-600 hover:border-slate-300`}
					>
						<Link to={`${ROUTES.COURSES}/${course.id}`}>
							<div>{course.name} </div>
							<div> {course.course_code}</div>
						</Link>
						<div>
							Grade:
							<span
								className={`font-bold
								${course.StudentCourse.grade === 0 && `text-red-500`}
            		${course.StudentCourse.grade === 1 && `text-orange-500`}
            		${course.StudentCourse.grade === 2 && `text-yellow-500`}
           			${course.StudentCourse.grade === 3 && `text-green-600`}
            		${course.StudentCourse.grade === 4 && `text-green-500`}`}
							>{` ${GRADES_MAP[`${course.StudentCourse.grade}`]}`}</span>
						</div>
						<div className="flex items-center">
							<div
								onClick={() => handleEditClick(course)}
								className="w-full m-2"
							>
								<Button buttonText={FORM_BUTTON_TEXT.EDIT_GRADE} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default StudentDetails;
