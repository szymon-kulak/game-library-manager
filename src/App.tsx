import { useState } from "react";
import GameList from "./GameList";
import GameTile from "./GameTile";

function App() {
	const [darkMode, toggleDarkMode] = useState(true);
	const [gamesToDisplay, setGamesToDisplay] = useState(GameList);

	const addGame = function () {
		let id = GameList.length + 1;
		let title = "New Game";
		let year = 2069;
		let status = "Backlog";
		GameList.push({
			id: id,
			title: title,
			year: year,
			status: status,
		});
		setGamesToDisplay([...GameList]);
	};

	return (
		<div className={`h-screen w-screen bg-zinc-800 text-zinc-200`}>
			<header className="fixed z-10 flex h-16 w-screen items-center justify-between bg-zinc-900 p-4 shadow-lg">
				<ul>
					<li>GLM</li>
				</ul>
				<input
					type="text"
					name="search"
					id="search"
					className="h-8 w-64 rounded-sm bg-zinc-400 p-2 opacity-20 shadow-sm outline-none transition-all	duration-300 ease-linear placeholder:text-zinc-200 focus:h-10 focus:w-[40rem] focus:text-zinc-950 focus:opacity-100 focus:placeholder:text-zinc-950"
					placeholder="Search"
				/>
				<button onClick={() => toggleDarkMode(!darkMode)}>
					{darkMode ? "Dark Mode" : "Light Mode"}
				</button>
			</header>
			<nav className="fixed mt-16 h-full w-64 bg-zinc-900 shadow-lg">
				<ul className="p-4">
					{[
						"Playing",
						"Paused",
						"In Queue",
						"Backlog",
						"Completed",
						"Dropped",
					].map((item) => (
						<li
							key={item}
							className="mb-2 rounded-xl p-4 hover:bg-zinc-800"
						>
							{item}
						</li>
					))}
				</ul>
			</nav>
			<div id="main-wrapper" className="h-full w-full pl-64 pt-16">
				<main className=" h-full w-full flex-wrap gap-4 overflow-scroll bg-zinc-800 p-6">
					{gamesToDisplay.map((game) => (
						<GameTile key={game.id} containedGame={game} />
					))}
				</main>
				<button
					className="absolute bottom-8 right-8 h-16 w-40 rounded-xl bg-zinc-600 shadow-xl"
					onClick={addGame}
				>
					+ Add Game
				</button>
			</div>
		</div>
	);
}

export default App;
