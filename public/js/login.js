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

let loginForm = document.querySelector('#login-box');

if (loginForm){
  loginForm.addEventListener('submit', loginFormHandler);
}
