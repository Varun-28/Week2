let input = document.querySelector('#chip-input');
let output = document.querySelector('.output');

input.addEventListener("keypress", myInput);

let count = 0;
function myInput(event){
    let key = event.keyCode;
    let val = input.value;
    if(key === 13 && val !== ''){
        var myDiv = document.createElement('div');
        myDiv.id = `chip${count}`;
        myDiv.className = "chip chip2";
        output.appendChild(myDiv);
        document.getElementById(`chip${count}`).innerHTML = `${val}<i class="fas fa-times-circle"></i>`;
        input.value = '';
        count++;
    }
}
