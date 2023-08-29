const newCharacterHandler = async (event) => {
  event.preventDefault();
  //Creates object out of data in form element.
  const myFormData = new FormData(event.target);
  const formDataObj = {};
  //Assigns values from formData to new object
  // FormData is weird because it can't be read properly
  // formDataObj assigns key value pairs using a each field's name/value
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  //if formDataObj is successfully created, creates a POST request
  if (formDataObj) {
    const response = await fetch('/api/avatar/create',  {
      method: 'POST',
      body: JSON.stringify(formDataObj), //convert to JSON
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      document.location.replace('/dashboard')
    } else {
      alert(response.statusText)
    }
  }
}

document.querySelector('form').addEventListener('submit',
newCharacterHandler)

