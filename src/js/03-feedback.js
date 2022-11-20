var throttle = require('lodash.throttle');

const formEL = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea')
const LOCALSTORAGE_KEY = 'feedback-form-state';

formEL.addEventListener('input', throttle(evt => {
    console.log(evt)
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
  }, 500)
);

formEL.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  });
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };
  
  const storageData = load(LOCALSTORAGE_KEY);
  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
  }