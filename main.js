/* 
 The solution for this challenge requires JavaScript DOM manipulation. 
 So we need;
    1- Select the necessary DOM elements (<bod> <main>);
    2- to target second <article> element in the DOM, 
    3- create a new <div> element, 
    4- assign to this <div> the same class like the one in the siblings,
    5- append new <div> element to its parent,
    6- and than target the last <div> element in the second <article> and set its href attribute to www.google.com,
    7- Lastly, we need to initialize this DOM event as a function and load with the onload of the window.  */



function addDiv() {
    let articleElement = document.querySelector(".square-container");
    let newDiv = document.createElement("div");
    newDiv.className = "square";
    articleElement.appendChild(newDiv);
 
    newDiv.addEventListener('click', function (){
        window.open("https://www.google.com/");
    });
};


window.onload = addDiv;