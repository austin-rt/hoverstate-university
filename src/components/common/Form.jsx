import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { FORM_TYPES } from '../../utils/constants';
import Button from './Button';

const Form = ({
	type,
	inputs,
	dataToEdit,
	buttonText,
	closeModal,
	getStudent,
	initialFormState
}) => {
	const { setFormState, handleChange, handleSubmit } = useForm(
		type,
		initialFormState
	);

	let form;

	useEffect(() => {
		if (dataToEdit) {
			const { id: courseId } = dataToEdit[0];
			const { id: studentId } = dataToEdit[0].student;
			const { grade } = dataToEdit[0].StudentCourse;
			console.log();
			setFormState({ courseId, studentId, grade });
		}
	}, [dataToEdit]);

	const handleEditSubmit = (e) => {
		handleSubmit(e);
		closeModal();
		getStudent();
	};

	switch (type) {
		case FORM_TYPES.GRADE.EDIT:
			form = (
				<form onSubmit={handleEditSubmit}>
					<div>
						{dataToEdit.map((course) => (
							<div key={course.id} className="flex flex-col items-center">
								<div className="text-2xl m-2">
									{`${course.student.first_name} ${course.student.last_name}`}
								</div>
								<div className="text-xl m-2">{course.name}</div>
								<div className="m-2">{course.course_code}</div>
								<select
									defaultValue={course.StudentCourse.grade}
									name="grade"
									onChange={handleChange}
									className="w-max-content text-center bg-transparent outline-1 outline-white outline rounded-sm m-2 py-1 px-2"
								>
									<option value={4}>A</option>
									<option value={3}>B</option>
									<option value={2}>C</option>
									<option value={1}>D</option>
									<option value={0}>F</option>
								</select>
							</div>
						))}
					</div>
					<Button buttonText={buttonText} />
				</form>
			);
			break;
		default:
			form = (
				<form onSubmit={handleSubmit}>
					<div>
						{inputs.map((input) => (
							<input
								key={input.name}
								type={input.type}
								name={input.name}
								placeholder={input.placeholder}
								onChange={handleChange}
								className="m-2 rounded text-center py-1 px-4 w-full"
							/>
						))}
					</div>
					<Button buttonText={buttonText} />
				</form>
			);
	}
	return <div className="flex justify-center">{form}</div>;
};
export default Form;
