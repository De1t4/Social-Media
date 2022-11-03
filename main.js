const btn = document.querySelector(".content-btn")
const main= document.getElementById("main-content")
const radio_btn = document.getElementById("btn-radio")

btn.addEventListener("click", ()=>{
    main.classList.toggle("main-theme")
    radio_btn.classList.toggle("radioMove")
})