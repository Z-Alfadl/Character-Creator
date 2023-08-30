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

function test(i) {
    const filePath = document.querySelectorAll(".slick-active")[i].currentSrc;
    const extractFile = filePath.split('/').pop().split('.')
    console.log(extractFile)
    
    return extractFile[0]
  }
document.querySelector('form').addEventListener('submit',
updateHandler)