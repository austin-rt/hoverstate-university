export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	COURSES: '/courses',
	STUDENTS: '/students',
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
	SEARCH: 'search'
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
	STUDENT_COURSE: {
		student_id: '',
		course_id: '',
		grade: ''
	}
};

export const GRADES_MAP = {
	4: 'A',
	3: 'B',
	2: 'C',
	1: 'D',
	0: 'F'
};