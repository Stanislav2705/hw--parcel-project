import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const LOCAL_KEY = 'feedback-form-state';


form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onFormInput, 500));

const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)) : {};

populateValuesForm();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправить форму');

  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

function onFormInput(evt) {
  formData(evt.target.name) = evt.target.value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function populateValuesForm() {
  const valuesForm = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (formValues) {
        if (valuesForm.email) {
            email.value = valuesForm.email;
        }
        if (valuesForm.message) {
           textarea.value = valuesForm.message;
        }
    }
}
