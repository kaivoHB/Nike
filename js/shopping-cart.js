let price = document.getElementById('price');
let total = 0;

document.getElementById("quantity").addEventListener("change", function(event){
    if(event.inputType == "insertReplacementText" || event.inputType == null) {
        total = (48.97 * event.target.value) + 8;
        price.innerText = '$' + total;
    }
})