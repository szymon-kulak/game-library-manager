import { useState } from "react";
import "./App.scss";

function App() {
	const [darkMode, toggleDarkMode] = useState(true);

	return (
		<>
			<h1>Dark Mode</h1>
			<div className="card">
				<button onClick={() => toggleDarkMode(!darkMode)}>
					Darkmode is {darkMode ? "enabled" : "disabled"}
				</button>
			</div>
		</>
	);
}

export default App;
