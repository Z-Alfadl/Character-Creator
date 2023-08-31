const updateHandler = async (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);

    const formDataObj = {};

    myFormData.forEach((value, key) => {formDataObj[key] = value});
    const fullForm = Object.assign(formDataObj, getImagePath())

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
        if (fullForm) {
        const response = await fetch(`/api/avatar/${id}`, {
            method: 'PUT',
            body: JSON.stringify(fullForm),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(formDataObj)
        if (response.ok) {
            document.location.replace(`/characters/${id}`)
        } else {
            alert(response.statusText)
        }
    }
}

function getImagePath() {
    const fileObj = {}
    const filePath = document.querySelectorAll(".slick-active")
    filePath.forEach((file)=> {
        const fileKey = file.currentSrc.split('/')[5]
        // const fileValue = file.currentSrc.split('/').pop().split('.')[0]
        const fileValue = file.currentSrc;
        fileObj[fileKey] = fileValue;
    })
    return fileObj
  }
document.querySelector('form').addEventListener('submit',
updateHandler)