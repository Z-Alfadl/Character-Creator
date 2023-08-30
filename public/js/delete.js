const deleteHandler = async (event) => {
    event.preventDefault();
    if (confirm("Are you sure you would like to delete this character?")) {
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
    } else {
        return
    }
    
}

document.querySelector("#delete").addEventListener('click', deleteHandler)