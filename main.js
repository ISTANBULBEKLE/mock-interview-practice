/* 
 The solution for this challenge requires JavaScript DOM manipulation. 
 So we need;
    1- to target second <article> element in the DOM, 
    2- create a new <div> element, 
    3- assign to this <div> the same class like the one in the siblings,
    4- target the last <div> element in the second <article> and set its src attribute to www.google.com,
    5- and than append new <div> element to its parent.
    6- Lastly, we need to initialize this DOM event as a function and load with the onload of the window.  */



function addDiv() {
    let body = document.querySelector("body");
    let main = document.querySelector("main");
    let articleElement = document.querySelector("main").lastElementChild;
    let newDiv = document.createElement("div");
    newDiv.className = "square";
    articleElement.appendChild(newDiv);
    main.appendChild(articleElement);
    body.appendChild(main);

    let lastDiv = document.querySelector(".square-container").lastElementChild;
    lastDiv.setAttribute("href", "https://www.google.com/");
    // let aTag = document.createElement("a");
    // aTag.setAttribute("href", "https://www.google.com/");
    // aTag.className = "square";
    // lastDiv.appendChild(aTag);
    console.log(lastDiv);
};

window.onload = addDiv;