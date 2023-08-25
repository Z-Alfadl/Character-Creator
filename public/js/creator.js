
function newCharacterHandler(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);
  const formDataObj = {};
  
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  console.log(formDataObj);
}

document.querySelector('form').addEventListener('submit',
newCharacterHandler)

