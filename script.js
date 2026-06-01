/* Slider */

let slides = document.querySelectorAll(".slide");
let contador = 0;

setInterval(() => {

slides[contador].classList.remove("active");

contador++;

if(contador >= slides.length){
contador = 0;
}

slides[contador].classList.add("active");

},4000);

/* Marco Teórico */

const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(pregunta=>{

pregunta.addEventListener("click",()=>{

const respuesta = pregunta.nextElementSibling;

if(respuesta.style.display==="block"){
respuesta.style.display="none";
}
else{
respuesta.style.display="block";
}

});

});

function buscarGoogle(){

    let texto = document.getElementById("busqueda").value;

    if(texto.trim() !== ""){
        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(texto),
            "_blank"
        );
    }

}

function buscarPagina(){

    let texto = document
    .getElementById("busqueda")
    .value
    .toLowerCase();

    let contenido = document.body.innerText.toLowerCase();

    if(contenido.includes(texto)){

        window.find(texto);

    }else{

        alert("No se encontró información en esta página.");

    }

}
