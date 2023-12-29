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

// overwrites the text
para.innerText = "wtf"

paras.forEach(para => {
    para.innerText += " new text";
    console.log(para);
})

const people = ["devv", "harry", "mary"];

people.forEach(person =>{
    error.innerHTML += `<p>${person}</p>`
})

const msg = document.querySelector('.success')
msg.innerHTML += `<h2>"Good for you"</h2>`
msg.setAttribute("style", "margin:50px;");


// To add properties w/o overwriting the exiting ones

console.log(msg.style);
msg.style.color = "green";
console.log(msg.style.color);

// Add remove and toggle classes
// .add()
// .remove()
// .toggle()
// .includes()

