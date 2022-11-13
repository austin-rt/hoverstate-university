import { useEffect, useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import {
	BASE_URL,
	API_ENDPOINTS,
	DEFAULT_FORM_VALUES,
	FORM_TYPES
} from '../../utils/constants';
import Button from './Button';

const Form = ({
	type,
	inputs,
	dataToEdit,
	buttonText,
	closeModal,
	getData,
	initialFormState
}) => {
	const { setFormState, handleChange, handleSubmit, formState } = useForm(
		type,
		initialFormState
	);

	let form;

	const [courses, setCourses] = useState(null);
	const [students, setStudents] = useState(null);

	const handleEditSubmit = (e) => {
		handleSubmit(e);
		getData();
		closeModal();
	};

	const handleAssignCourseSubmit = (e) => {
		handleSubmit(e);
		getData();
		closeModal();
	};

	const getAllCourses = async () => {
		try {
			const res = await axios.get(`${BASE_URL}${API_ENDPOINTS.COURSES.GET}`);
			setCourses(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const getStudents = async () => {
		try {
			const res = await axios.get(`${BASE_URL}${API_ENDPOINTS.STUDENTS.GET}`);
			setStudents(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!dataToEdit) return;
		if (dataToEdit.type === FORM_TYPES.GRADE.EDIT) {
			const { id: courseId } = dataToEdit.course[0];
			const { id: studentId } = dataToEdit.student;
			const { grade } = dataToEdit.course[0].StudentCourse;
			setFormState({ courseId, studentId, grade });
		} else if (dataToEdit.type === FORM_TYPES.GRADE.ADD) {
			if (dataToEdit.first_name) {
				const { id: studentId } = dataToEdit;
				getAllCourses();
				setFormState({
					...DEFAULT_FORM_VALUES.GRADE,
					studentId,
					grade: 4
				});
			} else if (dataToEdit.course_code) {
				const { id: courseId } = dataToEdit;
				getStudents();
				setFormState({
					...DEFAULT_FORM_VALUES.GRADE,
					courseId,
					grade: 4
				});
			}
		}
		// eslint-disable-next-line
	}, [dataToEdit, setFormState]);

	useEffect(() => {
		courses &&
			setFormState({ ...formState, courseId: parseInt(courses[0].id) });
		// eslint-disable-next-line
	}, [courses, setFormState]);

	useEffect(() => {
		students && setFormState({ ...formState, studentId: students[0].id });
		// eslint-disable-next-line
	}, [students, setFormState]);

	switch (type) {
		case FORM_TYPES.GRADE.EDIT:
			form = (
				<form
					onSubmit={handleEditSubmit}
					className="flex flex-col items-center"
				>
					<div className="flex flex-col place-content-between">
						{dataToEdit?.course.map((course) => (
							<div key={course.id} className="flex flex-col items-center">
								<div className="text-2xl">
									{`${dataToEdit.student.first_name} ${dataToEdit.student.last_name}`}
								</div>
								<div className="text-xl">{course.name}</div>
								<div>{course.course_code}</div>
								<select
									defaultValue={parseInt(course.StudentCourse.grade)}
									name="grade"
									onChange={handleChange}
									className="w-max-content bg-transparent outline-1 outline-white outline rounded-sm py-1 px-2"
								>
									<option value={4}>A</option>
									<option value={3}>B</option>
									<option value={2}>C</option>
									<option value={1}>D</option>
									<option value={0}>F</option>
								</select>
							</div>
						))}
						<Button buttonText={buttonText} />
					</div>
				</form>
			);
			break;
		case FORM_TYPES.GRADE.ADD:
			form = (
				<form
					onSubmit={handleAssignCourseSubmit}
					className="flex flex-col items-center w-2/3"
				>
					<div className="flex flex-col justify-center items-center">
						{dataToEdit.first_name ? (
							<div className="flex flex-col justify-center items-center">
								{dataToEdit.first_name} {dataToEdit.last_name}
								<select
									defaultValue={courses && parseInt(courses[0].id)}
									name="courseId"
									onChange={handleChange}
									className="w-full bg-transparent outline-1 outline-white outline rounded-sm m-2 py-1 px-2"
								>
									{courses?.map((course) => (
										<option key={course.id} value={parseInt(course.id)}>
											{course.name}
										</option>
									))}
								</select>
							</div>
						) : (
							<div>
								<div>
									{dataToEdit?.name} {dataToEdit?.course_code}
								</div>
								<select
									defaultValue={students && parseInt(students[0].id)}
									name="studentId"
									onChange={handleChange}
									className="w-max-content bg-transparent outline-1 outline-white outline rounded-sm m-2 py-1 px-2"
								>
									{students?.map((student) => (
										<option
											key={student.id}
											value={parseInt(student.id)}
										>{`${student.first_name} ${student.last_name}`}</option>
									))}
								</select>
							</div>
						)}
						<select
							defaultValue={parseInt(4)}
							name="grade"
							onChange={handleChange}
							className="w-max-content bg-transparent outline-1 outline-white outline rounded-sm m-2 py-1 px-2"
						>
							<option value={parseInt(4)}>A</option>
							<option value={parseInt(3)}>B</option>
							<option value={parseInt(2)}>C</option>
							<option value={parseInt(1)}>D</option>
							<option value={parseInt(0)}>F</option>
						</select>
					</div>
					<Button buttonText={buttonText} />
				</form>
			);
			break;
		default:
			form = (
				<form onSubmit={handleSubmit} className="flex flex-col items-center">
					<div>
						{inputs.map((input) => (
							<div key={input.name} className="flex flex-col items-center">
								<input
									key={input.name}
									type={input.type}
									name={input.name}
									placeholder={input.placeholder}
									onChange={handleChange}
									className="m-2 rounded py-1 px-3 w-full"
								/>
							</div>
						))}
					</div>
					<Button buttonText={buttonText} />
				</form>
			);
	}
	return <div className="flex justify-center text-center ">{form}</div>;
};
export default Form;
