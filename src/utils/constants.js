export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	COURSES: '/courses',
	COURSES_ADD: '/courses/add',
	STUDENTS: '/students',
	STUDENTS_ADD: '/students/add',
	STUDENT_BY_ID: '/students/:id',
	COURSE_BY_ID: '/courses/:id'
};

export const BASE_URL = 'https://hoverstate-university.up.railway.app/api/v1';

export const API_ENDPOINTS = {
	AUTH: {
		REGISTER: '/auth/register',
		LOGIN: '/auth/login'
	},
	USERS: {
		GET: '/users'
	},
	STUDENTS: {
		GET: '/students',
		CREATE: '/students/register',
		UPDATE: '/students/:id',
		DELETE: '/students/:id'
	},
	COURSES: {
		GET: '/courses',
		CREATE: '/courses/create',
		UPDATE: '/courses/:id',
		DELETE: '/courses/:id'
	},
	STUDENT_COURSES: {
		GET_BY_STUDENT_ID: '/student-courses',
		EDIT_GRADE: '/student-courses/grade',
		ASSIGN_STUDENT_TO_COURSE: '/student-courses/assign'
	}
};

export const FORM_TYPES = {
	AUTH: {
		REGISTER: 'register-user',
		LOGIN: 'login-user'
	},
	STUDENT: {
		ADD: 'add-student',
		EDIT: 'edit-student',
		DELETE: 'delete-student',
		ADD_COURSE: 'add-course'
	},
	SEARCH: 'search',
	COURSE: {
		EDIT: 'edit-course',
		DELETE: 'delete-course',
		CREATE: 'create-course'
	},
	GRADE: {
		ADD: 'add-grade',
		EDIT: 'edit-grade'
	}
};

export const DEFAULT_FORM_VALUES = {
	AUTH: {
		username: '',
		password: ''
	},
	SEARCH: {
		query: ''
	},
	COURSE: {
		name: '',
		courseCode: ''
	},
	STUDENT: {
		firstName: '',
		lastName: '',
		email: ''
	},
	GRADE: {
		studentId: '',
		courseId: '',
		grade: ''
	}
};

export const FORM_INPUT_ARRAYS = {
	AUTH: [
		{ name: 'username', type: 'text', placeholder: 'Username' },
		{ name: 'password', type: 'password', placeholder: 'Password' }
	],
	SEARCH: [{ name: 'query', type: 'text', placeholder: 'Search' }],
	COURSE: [
		{ name: 'name', type: 'text', placeholder: 'Course Name' },
		{ name: 'courseCode', type: 'text', placeholder: 'Course Code' }
	],
	STUDENT: [
		{ name: 'firstName', type: 'text', placeholder: 'First Name' },
		{ name: 'lastName', type: 'text', placeholder: 'Last Name' },
		{ name: 'email', type: 'email', placeholder: 'Email' }
	],
	GRADE: [
		{ name: 'studentId', type: 'text', placeholder: 'Student ID' },
		{ name: 'courseId', type: 'text', placeholder: 'Course ID' },
		{ name: 'grade', type: 'text', placeholder: 'Grade' }
	]
};

export const FORM_BUTTON_TEXT = {
	LOGIN: 'Sign In',
	REGISTER: 'Sign Up',
	SEARCH: 'Search',
	SUBMIT: 'Submit',
	ASSIGN: 'Assign to Course'
};

export const GRADES_MAP = {
	4: 'A',
	3: 'B',
	2: 'C',
	1: 'D',
	0: 'F'
};

export const MODAL_TYPES = {
	EDIT_GRADE: {
		type: 'edit-grade'
	},
	ASSIGN_COURSE: {
		type: 'assign-course'
	}
};
