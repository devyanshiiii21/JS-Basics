const form = document.querySelector(".signup");
const feedback = document.querySelector(".feedback");

form.addEventListener('submit', e => {
    e.preventDefault() // To prevent the refresh of page

    // Form validation
    const username = form.username.value;
    const pattern = /^[a-zA-Z]{6,12}$/;

    if(pattern.test(username)){
        feedback.textContent = "Username is valid";
    }
    else{
        feedback.textContent = "Username is not valid";
    }

});

//Regular Expression

const username = "raliya";
const pattern = /[a-z]{6,}/;

let result = pattern.test(username);
console.log(result);

let result2 = username.search(pattern);
console.log(result2);