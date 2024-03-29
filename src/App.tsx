import { useState } from "react";
import GameList from "./GameList";
import GameTile from "./components/GameTile";
import SideNav from "./components/SideNav";
import TopBar from "./components/TopBar";
import AddGamePopup from "./components/AddGamePopup";

function App() {
	const [darkMode, setDarkMode] = useState(true);
	const [gamesToDisplay, setGamesToDisplay] = useState(GameList);
	const [searchText, updateSearch] = useState("");
	const [addingGame, setAddingGame] = useState(false);

	const toggleDarkMode = function () {
		setDarkMode(!darkMode);
	};

	const toggleAddingGame = function () {
		setAddingGame(!addingGame);
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

	// Adds a sample game

	// const addGame = function () {
	// 	let id = GameList.length + 1;
	// 	let title = "New Game";
	// 	let year = 2069;
	// 	let platform = "PS4";
	// 	let status = "Backlog";
	// 	GameList.push({
	// 		id: id,
	// 		title: title,
	// 		year: year,
	// 		platform: platform,
	// 		status: status,
	// 	});
	// 	setGamesToDisplay([...GameList]);
	// };

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
					className={`h-full w-full overflow-scroll  p-6 transition-all duration-300 ease-linear ${darkMode ? "bg-zinc-800" : "bg-zinc-100"}`}
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
					className={`absolute bottom-8 right-8 h-16 w-40 rounded-xl ${darkMode ? "bg-zinc-600" : "bg-zinc-500 text-zinc-50"} shadow-xl transition-all duration-300 ease-linear`}
					onClick={() => toggleAddingGame()}
				>
					+ Add Game
				</button>
			</div>
			<AddGamePopup
				isVisible={addingGame}
				darkMode={darkMode}
				toggleAddingGame={toggleAddingGame}
			/>
		</div>
	);
}

export default App;
