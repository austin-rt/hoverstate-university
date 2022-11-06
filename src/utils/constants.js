export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard'
};

export const DEFAULT_FORM_VALUES = {
	SIGN_IN: {
		username: '',
		password: ''
	},
	SIGN_UP: {
		username: '',
		password: ''
	},
	STUDENT: {
		firstName: '',
		lastName: '',
		email: ''
	},
	COURSE: {
		name: '',
		courseCode: ''
	},
	STUDENT_COURSE: {
		studentId: '',
		courseId: '',
		grade: ''
	}
};

export const BASE_URL = 'https://hoverstate-university.up.railway.app/api/v1';

export const API_ENDPOINTS = {
	USERS: {
		GET: '/users'
	},
	STUDENTS: {
		GET_ALL: '/students',
		GET_ONE: '/students/:id',
		CREATE: '/students/register',
		UPDATE: '/students/:id',
		DELETE: '/students/:id'
	},
	COURSES: {
		GET_ALL: '/courses',
		GET_ONE: '/courses/:id',
		CREATE: '/courses/create',
		UPDATE: '/courses/:id',
		DELETE: '/courses/:id'
	},
	STUDENT_COURSES: {
		GET_BY_STUDENT_ID: '/student-courses/:id',
		EDIT_GRADE: '/student-courses/grade',
		ASSIGN_STUDENT_TO_COURSE: '/student-courses/assign'
	}
};
