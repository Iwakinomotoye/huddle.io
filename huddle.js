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
});
signupBtn2.addEventListener('click', () => {
    modalSignup.classList.remove('hide');
});
modalSignup.addEventListener('click', e => {
    if(e.target.id == 'modalSignup' | e.target.id == 'cancel-signup') {
        modalSignup.classList.add('hide');
    }
})

//for form validation
let hideValidationMessage = function() {
    let forEach = Array.prototype.forEach;
    let spans;
    if(modal.classList.contains('hide')){
        spans = document.querySelectorAll('#signupForm span[data-rule]');
        forEach.call(spans, function(span){
                span.setAttribute('class','hide');
        });
        document.getElementById('signupForm').checkValidity();
    } else if (modalSignup.classList.contains('hide')){
        spans = document.querySelectorAll('#form span[data-rule]');
        forEach.call(spans, function(span){
            span.setAttribute('class','hide');
        });
        document.getElementById('form').checkValidity();
    }
};

let showMessage = function() {
    if(this.nextElementSibling) {
        let shows;
        if(modal.classList.contains('hide')){
            shows = this.nextElementSibling.querySelectorAll('#signupForm span[data-rule]');
        } else if (modalSignup.classList.contains('hide')){
            shows = this.nextElementSibling.querySelectorAll('#form span[data-rule]');
        }
        forEach.call(shows, function(show) {
            show.classList.remove('hide');
        })       
    }
}

let inputs = document.querySelectorAll('input');
let forEach = Array.prototype.forEach;
forEach.call(inputs, function(input) {
    input.onfocus = showMessage;
    input.addEventListener('blur', hideValidationMessage);
    input.addEventListener('invalid', validateMessage);
});

function validateMessage(e) {
    if(!e.currentTarget.validity.valid){
        let spans = e.currentTarget.nextElementSibling.querySelectorAll('span[data-rule]');
        forEach.call(spans, function(span) {
            let validationMessage = span.getAttribute('data-rule');
            if(e.currentTarget.validity[validationMessage]) {
                let showMessages = e.currentTarget.nextElementSibling.
                querySelectorAll('[data-rule=' + validationMessage + ']');
                forEach.call(showMessages, function(showMessage) {
                    showMessage.classList.remove('hide');
                })
            }
        });
        e.preventDefault();
    }   
}
