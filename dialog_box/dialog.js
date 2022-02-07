const openBtn_arr = document.querySelectorAll(".btn");
const dialogBox_arr = document.querySelectorAll(".dialog");
const closeBtn_arr = document.querySelectorAll(".btn2");

for(let i = 0; i < openBtn_arr.length; i++){
    openBtn_arr[i].addEventListener("click", function(){
        dialogBox_arr[i].style.display = "block";
    })
}

for(let i = 0; i < closeBtn_arr.length; i++){
    closeBtn_arr[i].addEventListener("click", function(event){
        let clickedId = ".dialog" + (event.target.value);
        let dialogActive = document.querySelector(clickedId);
        dialogActive.style.display = "none";
    })
}