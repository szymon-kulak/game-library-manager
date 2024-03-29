import { Game } from "../GameList";
import { IoClose } from "react-icons/io5";

function GameMoreInfo({
	containedGame,
	isVisible,
	darkMode,
	setMoreInfo,
}: {
	containedGame: Game;
	isVisible: boolean;
	darkMode: boolean;
	setMoreInfo: Function;
}) {
	return (
		<div
			id="background"
			className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-zinc-900 bg-opacity-40 backdrop-blur-sm ${isVisible ? "visible" : "invisible"}`}
		>
			<div
				id="info"
				className={`relative min-h-[60%] w-[40%] rounded-xl shadow-xl ${darkMode ? "bg-zinc-700" : "bg-zinc-100"}`}
			>
				<div
					id="hero-image"
					className={`flex min-h-48 items-center justify-between rounded-xl ${darkMode ? "bg-zinc-800" : "bg-zinc-500"} p-4 shadow-xl `}
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
					<button
						className={`absolute right-4 top-4`}
						onClick={() => setMoreInfo(!isVisible)}
					>
						<IoClose size={32} />
					</button>
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
