// select first p tag
const paragraph = document.querySelector('p');

// select first div tag with 'error' class
const div_error = document.querySelector('div.error');

console.log(div_error);

// select all p tag
const paragraphs = document.querySelectorAll('p');

// using for each on quertSelectorAll
paragraphs.forEach((para) => {
    console.log(para);
});

// select all error class
const errors = document.querySelectorAll('.error');

console.log(errors);

// get an element by ID
const title = document.getElementById("page-title");
console.log(title);

// get elements by class --> generate HTMLCollection can be indexed but not forEach
const error_elements = document.getElementsByClassName("error");
console.log(error_elements);
console.log(error_elements[0]);

// get elements by tag name
const p_tags = document.getElementsByTagName('p');
console.log(p_tags);