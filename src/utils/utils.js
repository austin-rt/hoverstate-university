export const average = (array) => {
	const reducer = (sum, item) => {
		return sum + item;
	};
	return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length;
};

export const getGrades = (data) => {
	const { courses } = data;
	const grades = courses.map((course) => {
		return course.StudentCourse.grade;
	});
	return grades;
};
