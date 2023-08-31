const updateHandler = async (event) => {
    event.preventDefault();

    const myFormData = new FormData(event.target);

    const formDataObj = {};

    myFormData.forEach((value, key) => {formDataObj[key] = value});
    
    myFormData.head_img = test(0)

    //array ^
    //get filepath from the element
    //extract end point (chest1.png)
    //add to myFormData -> chest_img = "chest1"
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

function test() {
    const fileObj = {}
    const filePath = document.querySelectorAll(".slick-active")
    filePath.forEach((file)=> {
        const fileKey = file.currentSrc.split('/')[5]
        // const fileValue = file.currentSrc.split('/').pop().split('.')[0]
        console.log(`${fileKey}: ${fileValue}`)

    })
    const extractFile = filePath.split('/').pop().split('.')
    
    return extractFile[0]
  }
document.querySelector('form').addEventListener('submit',
updateHandler)