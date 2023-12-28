const para = document.querySelector('p');
const error = document.querySelector('.error');  // To get the element using class name
const divError = document.querySelector('div.error');

console.log(para);
console.log(error);
console.log(divError);
console.log(para[2]);


// Get element by ID
const p = document.getElementById('title');
console.log(p);

// // Get element by class name
// const errors = getElementsByClassName('error');
// console.log(errors);

// const paras = getElementsByTagName('p');
// console.log(paras);


// Adding or changing page content

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText)
})

// Adds the content
para.innerText += "what the hell!"
console.log(para);

// Rewrite the text
para.innerText = "wtf"
