function limit(num) {
    let total = 0;
    let elem = document.getElementsByName('box');
for (let i = 0; i < elem.length; i++) {
    if (elem[i].checked == true) {
        total = total + 1;
    }

    if (total > 3) {
        alert('Please limit your selection to 3 items');
        elem[num].checked = false;
        return false
    }

}

}
