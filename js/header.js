const availableThemes = ["dark", "light", "twentysecond", "custom"];
var siteData;

function validateData(data) {
	if (availableThemes.includes(data.theme) === false) {
		throw new Error("Theme does not exist!");
	}
	for (games in data.games) {
		if (typeof data.games[games] !== "boolean") {
			throw new Error("Game configuration must be a boolean!");
		}
	}
	return false;
}

function handleData(data) {
	validateData(data);
	console.log(data);
	themeData = document.createElement("link");
	themeData.rel = "stylesheet";
	if (document.body.classList.contains("index")) {
		themeData.href = `css/${data.theme}.css`;
	} else {
		themeData.href = `../css/${data.theme}.css`;
	}
	document.head.appendChild(themeData);
	const title = document.querySelector("[property=og:title]");
	const description = document.querySelector("[property=og:description]");
	const image = document.querySelector("[property=og:description]");
	title.content = data.meta.title;
	description.content = data.meta.description;
	image.content = data.meta.image;
}

fetch("../neuralekzz.json")
	.then((response) => response.json())
	.then((data) => {
		siteData = data;
		handleData(data);
	});
