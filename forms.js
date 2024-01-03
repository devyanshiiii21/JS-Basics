const form = document.querySelector(".signup");
const feedback = document.querySelector(".feedback");
const pattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault() // To prevent the refresh of page

    // Form validation
    const username = form.username.value;

    if(pattern.test(username)){
        feedback.textContent = "Username is valid";
    }
    else{
        feedback.textContent = "Username is not valid";
    }

});

//Regular Expression

const username = "raliya";

let result = pattern.test(username);
console.log(result);

let result2 = username.search(pattern);
console.log(result2);


// Keyboard events
// Live feedback

form.username.addEventListener('keyup', e =>{
    // console.log(e.target.value, form.username.value);
    if(pattern.test(form.username.value)){
        console.log('passed');
        form.username.setAttribute('class', 'success');
    }
    else{
        console.log('failed');
        form.username.setAttribute('class', 'failure');
    }
});
