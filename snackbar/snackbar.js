var showBtns = document.querySelectorAll(".btn");
var hideBtns = document.querySelectorAll(".exit");

for(let i = 0; i < showBtns.length; i++){
    showBtns[i].addEventListener("click", function(event){
        let cName = ".snackbar" + event.target.value;
        let snackbar = document.querySelector(cName);
        snackbar.style.visibility = "visible";
        setTimeout(function () {
            snackbar.style.visibility = "hidden";
          }, 3500);
    })

    hideBtns[i].addEventListener("click", function(event){
        let cName = ".snackbar" + event.target.value;
        console.log(cName);
        let snackbar = document.querySelector(cName);
        snackbar.style.visibility = "hidden";
    })
}
