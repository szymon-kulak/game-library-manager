import { Game } from "./GameList";

function GameTile({ containedGame }: { containedGame: Game }) {
	return (
		<div
			className={`overflow-hiddenshadow-xl relative h-32 w-48 rounded-xl`}
		>
			<div className=" h-full overflow-hidden rounded-xl bg-orange-600 text-center">
				{containedGame.cover ? (
					<img src={containedGame.cover} width="100%" />
				) : (
					<p className="p-4">{containedGame.title}</p>
				)}
			</div>
			<div className="absolute bottom-0 h-12 w-full rounded-b-xl bg-black p-4 text-center align-middle">
				{containedGame.status}
			</div>
		</div>
	);
}

export default GameTile;
