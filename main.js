

let body = document.querySelector("body")

function addDiv() {
	let main = document.querySelector("main");
	let articleElement = main.lastElementChild();
	let newDiv = document.createElement("div");
	newDiv.className = "square";
	newDiv.appendChild(articleElement);
    articleElement.appendChild(main);
    main.appendChild(body);

	let lastDiv = articleElement.lastChild();
	lastDiv.setAttribute("src", "https://www.google.com/");
	
}

window.onload = addDiv;