const dropdownBtn = document.querySelector('.bar_btn')
const dropdownBtnIcon = document.querySelector('.bar_btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

dropdownBtn.addEventListener("click", function(e){
    dropdownMenu.classList.toggle("open")
    isOpen = dropdownMenu.classList.contains("open")
    dropdownBtnIcon.classList = isOpen ? "fa-solid fa-xmark": "fa-solid fa-bars"
})