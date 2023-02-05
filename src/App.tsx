import { NavBar } from './components/NavBar';
import './styles/styles.scss';
import { PageBody } from './components/PageBody';

function App() {
	return (
		<div className="mainContainer">
			<NavBar />
			<PageBody />
		</div>
	);
}

export default App;
