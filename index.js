 function  dropdown (dropdownButton,dropdownMenu){
const btn = document.querySelector(dropdownButton);
const menu = document.querySelector(dropdownMenu);
btn.addEventListener("click",()=>{
    menu.classList.toggle("show");
})
document.addEventListener("click",(e)=>{
    if(e.target !== btn){



        menu.classList.remove("show");



    }
})
}

dropdown(".dropdown-button",".dropdown-menu")

module.exports = dropdown;