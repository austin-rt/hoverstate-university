import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { DEFAULT_FORM_VALUES, FORM_TYPES } from '../../utils/constants';

const Form = ({
	type,
	inputs,
	dataToEdit,
	buttonText,
	closeModal,
	wasEdited,
	setWasEdited
}) => {
	const { setFormState, handleChange, handleSubmit } = useForm(
		type,
		DEFAULT_FORM_VALUES.GRADE
	);

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
		setWasEdited((wasEdited) => {
			return !wasEdited;
		});
	};

	return (
		<div className="flex justify-center">
			<form
				onSubmit={dataToEdit ? handleEditSubmit : handleSubmit}
				className="flex flex-col justify-center items-center w-1/2"
			>
				{type === FORM_TYPES.GRADE ? (
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
				) : (
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
				)}
				<button className="bg-blue-500 py-2 px-4 m-2 rounded-md w-full">
					{buttonText}
				</button>
			</form>
		</div>
	);
};
export default Form;
