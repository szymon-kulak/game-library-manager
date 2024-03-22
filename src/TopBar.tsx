import DarkModeSwitch from "./DarkModeSwitch";

function TopBar({
	darkMode,
	searchText,
	filterBySearch,
	toggleDarkMode,
}: {
	darkMode: boolean;
	searchText: string;
	filterBySearch: Function;
	toggleDarkMode: Function;
}) {
	return (
		<header
			className={`fixed z-10 flex h-16 w-screen items-center justify-between transition-all duration-300 ease-linear ${darkMode ? "bg-zinc-900" : "bg-zinc-300"} p-4 shadow-lg`}
		>
			<ul>
				<li>GLM</li>
			</ul>
			<input
				type="text"
				name="search"
				id="search"
				className={`h-8 w-64 rounded-sm ${darkMode ? "bg-zinc-400 placeholder:text-zinc-600 focus:text-zinc-950 focus:placeholder:text-zinc-950" : "bg-zinc-700 placeholder:text-zinc-900 focus:text-zinc-100 focus:placeholder:text-zinc-400"} focus: bg-white p-2 opacity-20 shadow-sm outline-none transition-all duration-300 ease-linear focus:h-10 focus:w-[40rem] focus:opacity-100 `}
				placeholder="Search"
				value={searchText}
				onChange={(e) => filterBySearch(e.target.value)}
			/>
			<DarkModeSwitch darkMode={darkMode} toggleFunc={toggleDarkMode} />
		</header>
	);
}

export default TopBar;
