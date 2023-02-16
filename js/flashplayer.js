let game;
function setTitle(gamedata, gametype) {
	const flashgames = gamedata.flash;
	gametitle = flashgames.find((gamer) => gamer[0] === gametype)[1];

	let title = document.querySelector("title");
	title.innerHTML = `Neuralekzz | ${gametitle}`;
}
if (new URLSearchParams(window.location.search).has("game")) {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	urlparams = new URLSearchParams(window.location.search);
	game = urlparams.get("game");
	window.RufflePlayer = window.RufflePlayer || {};
	window.addEventListener("load", (event) => {
		const ruffle = window.RufflePlayer.newest();
		window.RufflePlayer.config = window.RufflePlayer.config || {};
		window.RufflePlayer.config.letterbox = "on";
		window.RufflePlayer.config.autoplay = "auto";
		window.RufflePlayer.config.publicPath = "files";
		const player = ruffle.createPlayer();
		container.appendChild(player);
		fetch(`https://raw.githubusercontent.com/neuralekzz/neuralekzz-assets/main/flash/${game}.swf`).then(player.load(`https://raw.githubusercontent.com/neuralekzz/neuralekzz-assets/main/flash/${game}.swf`));
	});
	document.body.style.overflowY = "hidden";
	fetch("https://raw.githubusercontent.com/neuralekzz/neuralekzz-assets/main/games.json")
		.then((data) => data.json())
		.then((gamed) => setTitle(gamed, game));
	style = document.querySelector('link[href="../css/flashgames.css"]');
	style.href = "../css/player.css";
}
