const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username_signup').value.trim();
  const email = document.querySelector('#email_signup').value.trim();
  const password = document.querySelector('#password_signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const results = await response.json();
    console.log(results);
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

let signupForm = document.querySelector('#signup_form');

if (signupForm){
  signupForm.addEventListener('submit', signupFormHandler);
};


