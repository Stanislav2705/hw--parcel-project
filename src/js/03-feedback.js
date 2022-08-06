import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const formDate = localStorage.getItem(LOCAL_KEY)
  ? JSON.parse(localStorage.getItem(LOCAL_KEY))
  : {};

populateValuesForm();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));

  localStorage.removeItem(LOCAL_KEY);
  evt.currentTarget.reset();
}

function onFormInput(e) {
  const {
    target: { name, value },
  } = e;
  formDate[name] = value;

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function populateValuesForm() {
  const formValues = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (formValues) {
    if (formValues.email) {
      email.value = formValues.email;
    }
    if (formValues.message) {
      textarea.value = formValues.message;
    }
  }
}
