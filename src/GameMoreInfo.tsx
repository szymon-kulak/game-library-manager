import { Game } from "./GameList";

function GameMoreInfo({
	containedGame,
	isVisible,
	darkMode,
}: {
	containedGame: Game;
	isVisible: boolean;
	darkMode: boolean;
}) {
	return (
		<div
			id="background"
			className={`fixed left-0 top-0 h-screen w-screen bg-zinc-900 bg-opacity-40 ${isVisible ? "visible" : "invisible"} left-0 top-0 z-50 flex items-center justify-center overflow-auto backdrop-blur-sm`}
		>
			<div
				id="info"
				className={`min-h-[60%] w-[40%]  rounded-xl ${darkMode ? "bg-zinc-700" : "bg-zinc-100"} shadow-xl`}
			>
				<div
					id="hero-image"
					className={`flex min-h-48 items-center justify-between rounded-xl ${darkMode ? "bg-zinc-800" : "bg-zinc-500"} p-4 shadow-xl`}
				>
					<img
						src={containedGame.cover}
						className="inline-block w-40 rounded-xl shadow-xl"
					/>
					<div className="flex flex-grow items-center justify-center">
						<h3 className="inline-block text-center text-3xl text-zinc-50 drop-shadow-xl">
							{containedGame.title}
						</h3>
					</div>
				</div>
				<table className="w-full overflow-scroll">
					<tr>
						<td className="p-4 font-bold">Status</td>
						<td className="p-4">{containedGame.status}</td>
					</tr>
					<tr>
						<td className="p-4 font-bold">Full Title</td>
						<td className="p-4">{containedGame.title}</td>
					</tr>
					<tr>
						<td className="p-4 font-bold">Year of Release</td>
						<td className="p-4">{containedGame.year}</td>
					</tr>
					<tr>
						<td className="p-4 font-bold">Platform</td>
						<td className="p-4">{containedGame.platform}</td>
					</tr>
					{containedGame.developer ? (
						<tr>
							<td className="p-4 font-bold">Developer</td>
							<td className="p-4">{containedGame.developer}</td>
						</tr>
					) : null}
					{containedGame.publisher ? (
						<tr>
							<td className="p-4 font-bold">Publisher</td>
							<td className="p-4">{containedGame.publisher}</td>
						</tr>
					) : null}
					{containedGame.genres ? (
						<tr>
							<td className="p-4 font-bold">Developer</td>
							<td className="p-4">
								{containedGame.genres.map(
									(genre) => `${genre} `,
								)}
							</td>
						</tr>
					) : null}
				</table>
			</div>
		</div>
	);
}

export default GameMoreInfo;
