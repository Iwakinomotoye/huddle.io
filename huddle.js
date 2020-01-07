const modal = document.getElementById('modal'),
form = document.getElementById('form'),
loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    modal.classList.remove('hide');
});
modal.addEventListener('click', e => {
    if(e.target.id == 'modal' | e.target.id == 'cancel') {
        modal.classList.add('hide');
    }
})

//for form validation
let hideValidationMessage = function() {
    let forEach = Array.prototype.forEach;
    let spans = document.querySelectorAll('span[data-rule]');
    forEach.call(spans, function(span){
                span.setAttribute('class','hide');
    });
    document.getElementById('form').checkValidity(); 

};
let showMessage = function() {
        let shows = this.nextElementSibling.querySelectorAll('span[data-rule]');
        forEach.call(shows, function(show) {
            show.classList.remove('hide');
        })
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