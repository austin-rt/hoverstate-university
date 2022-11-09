import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
	BASE_URL,
	API_ENDPOINTS,
	GRADES_MAP,
	ROUTES
} from '../utils/constants';
import FormModal from '../components/common/FormModal';

const StudentDetails = () => {
	const { id: studentId } = useParams();

	const [student, setStudent] = useState(null);
	const [selectedCourse, setSelectedCourse] = useState(null);
	const [modalVisibility, toggleModalVisibility] = useState(false);
	const [wasEdited, setWasEdited] = useState(false);

	console.log('rendered');

	const getStudent = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}${API_ENDPOINTS.STUDENTS.GET}/${studentId}`
			);
			setStudent(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleEditClick = (course) => {
		toggleModalVisibility(!modalVisibility);
		setSelectedCourse([{ ...course, student }]);
	};

	useEffect(() => {
		getStudent();
	}, [wasEdited]);

	return (
		<div className="flex flex-col items-center mt-10">
			<FormModal
				modalVisibility={modalVisibility}
				toggleModalVisibility={toggleModalVisibility}
				dataToEdit={selectedCourse}
				wasEdited={wasEdited}
				setWasEdited={setWasEdited}
			/>
			<h1 className="text-3xl">
				{student?.first_name} {student?.last_name}
			</h1>
			<div className="flex flex-wrap w-full justify-center">
				{student?.courses?.map((course) => (
					<div
						key={course.id}
						className={`flex flex-col justify-center items-center min-w-[15rem] m-4 p-4 text-center text-white w-1/4 rounded-md
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
