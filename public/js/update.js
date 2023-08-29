const updateHandler = async (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);

    const formDataObj = {};

    myFormData.forEach((value, key) => {formDataObj[key] = value});
    
    //Retrieves character id from url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      console.log(id)
    if (formDataObj) {
        const response = await fetch(`/api/avatar/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formDataObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(formDataObj)
        if (response.ok) {
            console.log('ok')
            document.location.replace(`/characters/${id}`)
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('form').addEventListener('submit',
updateHandler)