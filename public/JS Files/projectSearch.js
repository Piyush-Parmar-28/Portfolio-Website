function search(){
    let searchText= document.getElementById('myInput').value.toUpperCase();

    let card = document.getElementsByClassName('card-display-no');
    let cardHeader= document.getElementsByClassName('card-header');

    for (var i = 0; i < card.length; i++) {
        let text = cardHeader[i].innerText.toUpperCase();

        /* Now, we jave to compare our 'text' to the 'searchText', so that our 'searchText' matches the 'text' at any index. */
        /* Therefore, if our 'searchText' is present on any index of 'text', then it will display. */
        /* We know that, if 'searchText' is not found in the 'text' string, then indexOf() always returns the index = -1. */
        if (text.indexOf(searchText) > -1) {
            
            /* Adding css in JS */
            card[i].style.display= "";
        }

        else{
            card[i].style.display= "none";
        }
    }
}