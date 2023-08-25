const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log("This worked!");
  
    // Collect values from the login form
    const email = document.querySelector('#login_email').value.trim();
    const password = document.querySelector('#password_input').value.trim();
  
    console.log(email);
    console.log(password);

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText + "\nIncorrect email or password. Please try again.");
      }
    }
  };
  
  
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };


let loginForm = document.querySelector('#login_box');
// let loginForm = document.querySelector('#login_button');

if (loginForm){
  loginForm.addEventListener('submit', loginFormHandler);
}

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
