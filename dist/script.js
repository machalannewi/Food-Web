const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const xmark = document.getElementById("xmark");

hamburger.addEventListener("click", () => {
	if (menu.classList.contains("hidden")) {
		menu.classList.remove("hidden");
		hamburger.classList.add("hidden");
		xmark.classList.remove("hidden");
	} else {
		menu.classList.add("hidden");
	}
});

xmark.addEventListener("click", () => {
	if (hamburger.classList.contains("hidden")) {
		hamburger.classList.remove("hidden");
		menu.classList.add("hidden");
		xmark.classList.add("hidden");
	} else {
		hamburger.classList.add("hidden");
	}
});
