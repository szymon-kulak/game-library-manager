import { Game } from "./GameList";

function GameTile({ containedGame }: { containedGame: Game }) {
	return (
		<div
			className={`relative m-2 inline-block h-32 w-48 overflow-hidden rounded-xl shadow-xl`}
		>
			<div className=" h-full overflow-hidden rounded-xl bg-zinc-600 text-center">
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
			<div className="absolute bottom-0 flex h-12 w-full items-center justify-center overflow-clip text-clip rounded-b-xl bg-black p-2 text-center ">
				{containedGame.title}
			</div>
		</div>
	);
}

export default GameTile;
