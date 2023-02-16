const cloakTitle = localStorage.getItem("title");
const cloakLink = localStorage.getItem("favicon");

function settabcloak(title, link) {
	const favicon = document.querySelector('link[rel="icon"]');
	const documentTitle = document.querySelector("title");
	documentTitle.innerHTML = title;
	favicon.href = cloakLink;
}

cloakTitle ? settabcloak(cloakTitle, cloakLink) : console.log("No title/favicon found");
