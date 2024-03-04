import { Game } from "./GameList";

function GameMoreInfo({
	containedGame,
	isVisible,
}: {
	containedGame: Game;
	isVisible: boolean;
}) {
	return (
		<div
			id="background"
			className={`fixed left-0 top-0 h-screen w-screen bg-zinc-900 bg-opacity-40 ${isVisible ? "visible" : "invisible"} left-0 top-0 z-50 flex items-center justify-center overflow-auto backdrop-blur-sm`}
		>
			<div
				id="info"
				className="min-h-[60%] w-[40%] rounded-xl bg-zinc-700 shadow-xl"
			>
				<div className="flex items-center justify-between rounded-xl bg-zinc-800 p-4 shadow-xl">
					<img
						src={containedGame.cover}
						className="inline-block w-40 rounded-xl shadow-xl"
					/>
					<div className="flex flex-grow items-center justify-center">
						<h3 className="inline-block text-3xl text-zinc-50 drop-shadow-xl">
							{containedGame.title}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GameMoreInfo;
