import { useState } from "react";
import GameList from "./GameList";
import GameTile from "./GameTile";
import DarkModeSwitch from "./DarkModeSwitch";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [gamesToDisplay, setGamesToDisplay] = useState(GameList);
	const [searchText, updateSearch] = useState("");

	const toggleDarkMode = function () {
		setDarkMode(!darkMode);
	};

	const filterBySearch = function (text: string) {
		updateSearch(text);
		setGamesToDisplay(
			GameList.filter(
				(game) =>
					game.title.toLowerCase().includes(text.toLowerCase()) ||
					game.developer
						?.toLowerCase()
						.includes(text.toLowerCase()) ||
					game.publisher
						?.toLowerCase()
						.includes(text.toLowerCase()) ||
					game.year
						.toString()
						.toLowerCase()
						.includes(text.toLowerCase()),
			),
		);
	};

	const addGame = function () {
		let id = GameList.length + 1;
		let title = "New Game";
		let year = 2069;
		let platform = "PS4";
		let status = "Backlog";
		GameList.push({
			id: id,
			title: title,
			year: year,
			platform: platform,
			status: status,
		});
		setGamesToDisplay([...GameList]);
	};

	return (
		<div
			className={`h-screen w-screen ${darkMode ? "bg-zinc-800" : "bg-zinc-200"} ${darkMode ? "text-zinc-200" : "text-zinc-800"}`}
		>
			<header
				className={`fixed z-10 flex h-16 w-screen items-center justify-between ${darkMode ? "bg-zinc-900" : "bg-zinc-300"} p-4 shadow-lg`}
			>
				<ul>
					<li>GLM</li>
				</ul>
				<input
					type="text"
					name="search"
					id="search"
					className={`h-8 w-64 rounded-sm ${darkMode ? "bg-zinc-400 placeholder:text-zinc-600 focus:placeholder:text-zinc-950" : "bg-zinc-900 placeholder:text-zinc-900 focus:placeholder:text-zinc-950"} focus: bg-white p-2 opacity-20 shadow-sm outline-none transition-all  duration-300 ease-linear focus:h-10 focus:w-[40rem] focus:text-zinc-950 focus:opacity-100 `}
					placeholder="Search"
					value={searchText}
					onChange={(e) => filterBySearch(e.target.value)}
				/>
				<DarkModeSwitch
					darkMode={darkMode}
					toggleFunc={toggleDarkMode}
				/>
			</header>
			<nav
				className={`fixed mt-16 h-full w-64 ${darkMode ? "bg-zinc-900" : "bg-zinc-300"} shadow-lg`}
			>
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
							className={`mb-2 rounded-xl p-4 ${darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-400"}`}
						>
							{item}
						</li>
					))}
				</ul>
			</nav>
			<div id="main-wrapper" className="h-full w-full pl-64 pt-16">
				<main
					className={`h-full w-full flex-wrap gap-4 overflow-scroll ${darkMode ? "bg-zinc-800" : "bg-zinc-100"} p-6`}
				>
					{gamesToDisplay.map((game) => (
						<GameTile
							key={game.id}
							containedGame={game}
							darkMode={darkMode}
						/>
					))}
				</main>
				<button
					className={`absolute bottom-8 right-8 h-16 w-40 rounded-xl ${darkMode ? "bg-zinc-600" : "bg-zinc-500 text-zinc-50"} shadow-xl`}
					onClick={addGame}
				>
					+ Add Game
				</button>
			</div>
		</div>
	);
}

export default App;
