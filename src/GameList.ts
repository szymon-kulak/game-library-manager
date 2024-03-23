export type Game = {
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
};

enum playStatus {
	"Not In Library",
	"Unplayed",
}

console.log(playStatus[0]);

// This simulates the db so I can finish the frontend while working on the backend

let GameList: Game[] = [
	{
		id: 1,
		title: "Super Mario Bros 3",
		year: 1988,
		platform: "NES",
		status: "Backlog",
		developer: "Nintendo EAD",
		publisher: "Nintendo",
		genres: ["Platformer"],
		cover: "https://cdn.europosters.eu/image/750/posters/super-mario-bros-3-nes-cover-i20784.jpg",
	},
	{
		id: 2,
		title: "Prince of Persia: The Lost Crown",
		year: 2024,
		platform: "Switch",
		status: "Playing",
		developer: "Ubisoft Montpellier",
		publisher: "Ubisoft",
		genres: ["Action", "Adventure", "Platformer"],
		cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Prince_of_Persia_The_Lost_Crown_cover_art.jpg",
	},
	{
		id: 3,
		title: "Assassin's Creed",
		year: 2007,
		platform: "PC (GOG)",
		status: "Playing",
		developer: "Ubisoft Montreal",
		publisher: "Ubisoft",
		genres: ["Action", "Adventure", "Stealth", "Open World"],
		cover: "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg",
	},
	{
		id: 4,
		title: "Assassin's Creed II",
		year: 2009,
		platform: "PC (Ubisoft)",
		status: "Backlog",
		developer: "Ubisoft Montreal",
		publisher: "Ubisoft",
		genres: ["Action", "Adventure", "Stealth", "Open World"],
		cover: "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG",
	},
	{
		id: 5,
		title: "Resident Evil 2",
		year: 1998,
		platform: "PS1",
		status: "Backlog",
		developer: "Capcom",
		publisher: "Capcom",
		genres: ["Survival Horror", "Adventure"],
		cover: "https://upload.wikimedia.org/wikipedia/en/4/40/NTSC_Resident_Evil_2_Cover.png",
	},
	{
		id: 6,
		title: "Resident Evil 2",
		year: 2019,
		platform: "PC (Steam)",
		status: "Backlog",
		developer: "Capcom R&D Division 1",
		publisher: "Capcom",
		genres: ["Survival Horror", "Third-Person Shooter"],
		cover: "https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_2_Remake.jpg",
	},
	{
		id: 7,
		title: "Disco Elysium",
		year: 2019,
		platform: "PC (Steam)",
		status: "Completed",
		developer: "ZA/UM",
		publisher: "ZA/UM",
		genres: ["RPG", "cRPG"],
		cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Disco_Elysium_Poster.jpeg/220px-Disco_Elysium_Poster.jpeg",
	},
	{
		id: 8,
		title: "The Legend of Zelda: Ocarina of Time",
		year: 1998,
		platform: "Nintendo 64",
		status: "Completed",
		developer: "Nintendo EAD",
		publisher: "Nintendo",
		genres: ["Action", "Adventure", "RPG"],
		cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg/220px-The_Legend_of_Zelda_Ocarina_of_Time.jpg",
	},
	{
		id: 9,
		title: "Final Fantasy VII",
		year: 1997,
		platform: "PS1",
		status: "Playing",
		developer: "Square",
		publisher: "Square",
		genres: ["jRPG", "RPG"],
		cover: "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg",
	},
];

GameList = GameList.sort((a, b) => a.title.localeCompare(b.title));

export default GameList;
