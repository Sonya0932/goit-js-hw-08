var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input',throttle(onInputForm,500));
form.addEventListener('submit', onSubmitForm);
window.addEventListener('load', updateOutput);

function onInputForm(evt) {
  evt.preventDefault();
  const message = form.elements.message.value;
  const email = form.elements.email.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
  
}

function updateOutput(evt) {
  evt.preventDefault();
  const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY);
  const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
  const { email, message } = outputObjectContent;
  form.elements.email.value = email;
  form.elements.message.value = message;
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  console.log({email:email.value, message:message.value})
  localStorage.clear();
  form.reset();
}
