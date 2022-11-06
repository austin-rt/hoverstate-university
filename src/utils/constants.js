export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard'
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
