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
			className={`relative h-screen w-screen bg-zinc-900 opacity-30 ${isVisible ? "visible" : "invisible"} left-0 top-0 overflow-auto`}
		>
			<div>{containedGame.title}</div>
		</div>
	);
}

export default GameMoreInfo;
