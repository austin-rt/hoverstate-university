import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'reduc-thunk';

import UserSlice from './UserSlice';

const reducers = combineReducers({
	UserSlice
});

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk]
});

export default store;
