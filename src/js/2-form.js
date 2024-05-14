let formData = {
  email: '',
  message: '',
};

const loginForm = document.querySelector('.feedback-form');
loginForm.addEventListener('input', event => {
  const input = event.target;
  formData[input.name] = input.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');

    loginForm.reset();
  }
});

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  formData.email = JSON.parse(savedData).email;
  formData.message = JSON.parse(savedData).message;

  loginForm.email.value = formData.email;
  loginForm.message.value = formData.message;
}
