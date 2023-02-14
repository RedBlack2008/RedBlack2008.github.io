const availableThemes = ["dark", "light", "twentysecond", "custom"];
var siteData;

function validateData(data) {
	if (data.themes.includes(data.theme) === false) {
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
		themeData.href = `css/themes/${data.theme}.css`;
	} else {
		themeData.href = `../css/themes/${data.theme}.css`;
	}
	document.head.appendChild(themeData);
}

fetch("../neuralekzz.json")
	.then((response) => response.json())
	.then((data) => {
		siteData = data;
		handleData(data);
	});
