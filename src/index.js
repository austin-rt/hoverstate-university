import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import './index.css';
import App from './App';

import store from './redux/store';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<App />
				</Router>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
