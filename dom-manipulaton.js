// JavaScript DOM Manipulation Examples

// Change the text of an element
const heading = document.getElementById("heading");

if (heading) {
    heading.textContent = "Hello, JavaScript!";
}

// Change the color of an element
if (heading) {
    heading.style.color = "blue";
}

// Add a new paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "This paragraph was created using JavaScript.";

document.body.appendChild(paragraph);
