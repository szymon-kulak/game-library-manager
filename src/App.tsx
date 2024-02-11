import { useState } from "react";

function App() {
	const [darkMode, toggleDarkMode] = useState(true);

	// function Game(id: number, name: string) {
	// 	this.id = id;
	// 	this.name = name;
	// }

	// const mario3 = new Game(1, "Super Mario Bros 3");

	interface Game {
		id: number;
		name: string;
		year: number;
		status: string;
	}

	const gamesArray: Game[] = [
		{ id: 1, name: "Super Mario Bros 3", year: 1988, status: "Backlog" },
		{
			id: 2,
			name: "Prince of Persia: The Lost Crown",
			year: 2024,
			status: "Playing",
		},
		{
			id: 3,
			name: "Assassin's Creed",
			year: 2007,
			status: "Playing",
		},
	];

	const gameColorsArray: string[] = [
		"bg-red-500",
		"bg-emerald-500",
		"bg-orange-500",
		"bg-yellow-500",
	];

	return (
		<div className={`h-screen w-screen bg-zinc-800 text-zinc-200`}>
			<header className="fixed flex h-16 w-screen items-center justify-between bg-zinc-900 p-4 shadow-lg">
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
				<main className="flex h-full w-full gap-4 bg-zinc-800 p-6">
					{gamesArray.map((game) => (
						<div
							className={`relative h-32 w-48 rounded-xl ${gameColorsArray[Math.floor(Math.random() * gameColorsArray.length)]} shadow-xl`}
						>
							<div
								key={game.id}
								className=" h-full rounded-xl p-4 text-center"
							>
								{game.name}
							</div>
							<div className="absolute bottom-0 h-12 w-full rounded-b-xl bg-black p-4 text-center">
								{game.status}
							</div>
						</div>
					))}
				</main>
			</div>
		</div>
	);
}

export default App;
