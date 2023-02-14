let game;
if (new URLSearchParams(window.location.search).has("game")) {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	urlparams = new URLSearchParams(window.location.search);
	game = urlparams.get("game");
	window.RufflePlayer = window.RufflePlayer || {};
	window.addEventListener("load", (event) => {
		const ruffle = window.RufflePlayer.newest();
		window.RufflePlayer.config.letterbox = "on";
		const player = ruffle.createPlayer();
		container.appendChild(player);
		fetch(`https://raw.githubusercontent.com/neuralekzz/neuralekzz-assets/main/flash/${game}.swf`).then(player.load(`https://raw.githubusercontent.com/neuralekzz/neuralekzz-assets/main/flash/${game}.swf`));
	});
	document.body.style.overflowY = "hidden";
} else {
	// add here
}
