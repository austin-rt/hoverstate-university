export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	COURSES: '/courses',
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
	REGISTER: 'register',
	LOGIN: 'login',
	SEARCH: 'search',
	STUDENT: 'student',
	COURSE: 'course',
	GRADE: 'grade'
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
		course_code: ''
	},
	STUDENT: {
		first_name: '',
		last_name: '',
		email: ''
	},
	GRADE: {
		student_id: '',
		course_id: '',
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
		{ name: 'course_code', type: 'text', placeholder: 'Course Code' }
	],
	STUDENT: [
		{ name: 'first_name', type: 'text', placeholder: 'First Name' },
		{ name: 'last_name', type: 'text', placeholder: 'Last Name' },
		{ name: 'email', type: 'email', placeholder: 'Email' }
	],
	GRADE: [
		{ name: 'student_id', type: 'text', placeholder: 'Student ID' },
		{ name: 'course_id', type: 'text', placeholder: 'Course ID' },
		{ name: 'grade', type: 'text', placeholder: 'Grade' }
	]
};

export const FORM_BUTTON_TEXT = {
	LOGIN: 'Sign In',
	REGISTER: 'Sign Up',
	SEARCH: 'Search',
	SUBMIT: 'Submit'
};

export const GRADES_MAP = {
	4: 'A',
	3: 'B',
	2: 'C',
	1: 'D',
	0: 'F'
};
