function DarkModeSwitch({
	darkMode,
	toggleFunc,
}: {
	darkMode: boolean;
	toggleFunc: Function;
}) {
	return (
		<button onClick={() => toggleFunc()}>
			{darkMode ? "Dark Mode" : "Light Mode"}
		</button>
	);
}

export default DarkModeSwitch;
