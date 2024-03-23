import { IoClose } from "react-icons/io5";

function AddGamePopup({
	isVisible,
	darkMode,
	toggleAddingGame,
}: {
	isVisible: boolean;
	darkMode: boolean;
	toggleAddingGame: Function;
}) {
	return isVisible ? (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-zinc-900 bg-opacity-40 backdrop-blur-sm">
			<div
				className={`relative min-h-[60%] w-[40%] rounded-xl shadow-xl ${darkMode ? "bg-zinc-700" : "bg-zinc-100"}`}
			>
				<button
					className={`absolute right-4 top-4`}
					onClick={() => toggleAddingGame()}
				>
					<IoClose size={32} />
				</button>
			</div>
		</div>
	) : (
		""
	);
}

export default AddGamePopup;
