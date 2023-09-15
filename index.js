const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const boton = document.querySelector("#btn")
const copyright = document.getElementById("copyright")

abrir.addEventListener('click', () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener('click', () =>{
    nav.classList.remove("visible")
})

abrir.addEventListener('click', () =>{
    btn.classList.add('invisible')
})

cerrar.addEventListener('click', () =>{
    btn.classList.remove('invisible')
})
