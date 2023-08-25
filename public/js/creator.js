const newCharacterHandler = async (event) => {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const formDataObj = {};
  
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
  console.log(JSON.stringify(formDataObj))
  if (formDataObj) {
    const response = await fetch('/api/create',  {
      method: 'POST',
      body: JSON.stringify(formDataObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.ok) {
      console.log('ok')
    } else {
      console.log('not ok')
    }
  }
}

document.querySelector('form').addEventListener('submit',
newCharacterHandler)

