function SideNav({ darkMode }: { darkMode: boolean }) {
	return (
		<nav
			className={`fixed mt-16 h-full w-64 ${darkMode ? "bg-zinc-900" : "bg-zinc-300"} shadow-lg`}
		>
			<ul className="p-4">
				{[
					"Playing",
					"Paused",
					"In Queue",
					"Backlog",
					"Completed",
					"Dropped",
				].map((item) => (
					<li
						key={item}
						className={`mb-2 rounded-xl p-4 ${darkMode ? "hover:bg-zinc-800" : "hover:bg-zinc-400"}`}
					>
						{item}
					</li>
				))}
			</ul>
		</nav>
	);
}

export default SideNav;
