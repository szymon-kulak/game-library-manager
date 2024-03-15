import { useState } from "react";
import GameList from "./GameList";
import GameTile from "./GameTile";
import SideNav from "./SideNav";
import TopBar from "./TopBar";

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
			<TopBar
				darkMode={darkMode}
				searchText={searchText}
				filterBySearch={filterBySearch}
				toggleDarkMode={toggleDarkMode}
			/>
			<SideNav darkMode={darkMode} />
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
