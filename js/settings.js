function settabcloakButton() {
	const inputTitle = document.getElementById("title");
	const inputLink = document.getElementById("sitelink");
	const favicon = document.querySelector('link[rel="icon"]');
	const documentTitle = document.querySelector("title");
	const title = inputTitle.value;
	const link = inputLink.value;
	localStorage.setItem("title", title);
	if (link === "") {
		localStorage.setItem("favicon", "../images/favicon.ico");
		favicon.href = `../images/favicon.ico`;
	} else {
		localStorage.setItem("favicon", `https://www.google.com/s2/favicons?domain=${link}`);
		favicon.href = `https://www.google.com/s2/favicons?domain=${link}`;
	}
	if (title === "") {
		localStorage.setItem("title", undefined);
	} else {
		localStorage.setItem("title", title);
		documentTitle.innerHTML = title;
	}
}

const themeSelect = document.querySelector("select#theme");

function settheme() {
	localStorage.setItem("theme", themeSelect.value);
	let themeData = document.querySelector('link[href^="../css/themes/"]');
	themeData.href = `../css/themes/${themeSelect.value}.css`;
}

setTimeout(() => {
	for (theme of siteData.themes) {
		let themeOption = document.createElement("option");
		themeOption.value = theme;
		themeOption.innerHTML = theme.toTitleCase();
		themeSelect.appendChild(themeOption);
	}
}, 200);
