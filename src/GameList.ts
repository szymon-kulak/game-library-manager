export interface Game {
	id: number;
	title: string;
	status: string;
	year: number;
	platform: string;
	developer?: string;
	publisher?: string;
	genres?: string[];
	cover?: string;
	background?: string;
}

const GameList: Game[] = [
	{
		id: 1,
		title: "Super Mario Bros 3",
		year: 1988,
		status: "Backlog",
		platform: "NES",
		developer: "Nintendo EAD",
		publisher: "Nintendo",
		genres: ["Platformer"],
		cover: "https://cdn.europosters.eu/image/750/posters/super-mario-bros-3-nes-cover-i20784.jpg",
	},
	{
		id: 2,
		title: "Prince of Persia: The Lost Crown",
		year: 2024,
		status: "Playing",
		platform: "Switch",
		developer: "Ubisoft Montpellier",
		publisher: "Ubisoft",
		genres: ["Action", "Adventure", "Platformer"],
		cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Prince_of_Persia_The_Lost_Crown_cover_art.jpg",
	},
	{
		id: 3,
		title: "Assassin's Creed",
		year: 2007,
		status: "Playing",
		platform: "PC (GOG)",
		developer: "Ubisoft Montreal",
		publisher: "Ubisoft",
		genres: ["Action", "Adventure", "Stealth", "Open World"],
		cover: "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg",
	},
];

export default GameList;
