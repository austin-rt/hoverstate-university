import NavBar from './components/NavBar';
import { Navigation } from './navigation/Navigation';

function App() {
	return (
		<div className="min-h-[100vh] bg-gradient-to-br from-slate-700 to-slate-800 text-slate-300">
			<NavBar />
			<Navigation />
		</div>
	);
}

export default App;
