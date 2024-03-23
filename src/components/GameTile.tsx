import { useState } from "react";
import { Game } from "../GameList";
import GameMoreInfo from "./GameMoreInfo";

function GameTile({
	containedGame,
	darkMode,
}: {
	containedGame: Game;
	darkMode: boolean;
}) {
	const [moreInfo, setMoreInfo] = useState(false);

	return (
		<>
			<div
				className={`relative m-2 inline-block h-32 w-48 cursor-pointer overflow-hidden rounded-xl shadow-xl`}
				onClick={() => setMoreInfo(!moreInfo)}
			>
				<div
					className={`h-full overflow-hidden rounded-xl bg-zinc-600 text-center`}
				>
					{containedGame.cover ? (
						<img
							src={containedGame.cover}
							alt={containedGame.title}
							width="100%"
						/>
					) : (
						<p className="p-4">{containedGame.title}</p>
					)}
				</div>
				<div
					className={`absolute bottom-0 flex h-12 w-full items-center justify-center overflow-clip text-clip rounded-b-xl p-2 text-center transition-all duration-300 ease-linear ${darkMode ? "bg-black" : "bg-white"}`}
				>
					{containedGame.title}
				</div>
			</div>
			<GameMoreInfo
				containedGame={containedGame}
				isVisible={moreInfo}
				darkMode={darkMode}
				setMoreInfo={setMoreInfo}
			/>
		</>
	);
}

export default GameTile;
