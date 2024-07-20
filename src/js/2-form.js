const formData = { email: '', message: '' };

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

populateForm();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const key = event.target.name;
  const value = event.target.value;

  formData[key] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);

  if (savedMsg) {
    const parsedMsg = JSON.parse(savedMsg);
    formData.email = parsedMsg.email;
    formData.message = parsedMsg.message;

    form.email.value = formData.email;
    form.message.value = formData.message;
  }
}
function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  event.currentTarget.reset();
}
