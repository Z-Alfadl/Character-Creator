const deleteHandler = async (event) => {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const response = await fetch(`/api/avatar/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace(`/dashboard`)
    }
    
}

document.querySelector("#delete").addEventListener('click', deleteHandler)