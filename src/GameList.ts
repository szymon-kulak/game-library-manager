interface Game {
	id: number;
	name: string;
	year: number;
	status: string;
}

const GameList: Game[] = [
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

export default GameList;
