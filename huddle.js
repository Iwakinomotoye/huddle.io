// for login form display
const modal = document.getElementById('modal'),
// form = document.getElementById('form'),
loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    modal.classList.remove('hide');
});
modal.addEventListener('click', e => {
    if(e.target.id == 'modal' | e.target.id == 'cancel') {
        modal.classList.add('hide');
    }
})

//for signup form display
const modalSignup = document.getElementById('modalSignup'),
signupBtn = document.getElementById('signupBtn');
signupBtn2 = document.getElementById('signupBtn2');
signupBtn.addEventListener('click', () => {
    modalSignup.classList.remove('hide');
    adjustViewPosition();
});
signupBtn2.addEventListener('click', () => {
    modalSignup.classList.remove('hide');
    adjustViewPosition();
});
modalSignup.addEventListener('click', e => {
    if(e.target.id == 'modalSignup' | e.target.id == 'cancel-signup') {
        modalSignup.classList.add('hide');
    }
})

function adjustViewPosition() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//for form validation
let showMessage = function(e) {
    let signupPassword = document.getElementById('signup-password');
    let confirmPassword = document.getElementById('confirm-password');
    if(confirmPassword.value != signupPassword.value) {
        confirmPassword.setCustomValidity('no');
    } else {
        confirmPassword.setCustomValidity('');
    }
    
    let shows= e.currentTarget.nextElementSibling.querySelectorAll('span[data-rule]');
    if(!e.currentTarget.validity.valid) {
        forEach.call(shows, function(show) {
            let rule = show.getAttribute('data-rule');
            if(e.currentTarget.validity[rule] == true) {
                let showMessage = e.currentTarget.nextElementSibling.
                querySelector('[data-rule=' + rule + ']');
                showMessage.classList.remove('hide');
            }
        })       
    } else {
        forEach.call(shows, function(show) {
            show.classList.add('hide');
        })
    }
}

function validateMessage(e) {
    if(!e.currentTarget.validity.valid){
        let spans= e.currentTarget.nextElementSibling.querySelectorAll('span[data-rule]');
        forEach.call(spans, function(span) {
            span.classList.remove('hide');
        });
        e.preventDefault();
    }
}

let inputs = document.querySelectorAll('input');
let forEach = Array.prototype.forEach;
forEach.call(inputs, function(input) {
    input.addEventListener('blur', showMessage);
    input.addEventListener('invalid', validateMessage);
});
