const program = document.getElementById("Programas");
const lengu = document.getElementById("Lenguajes");
const flecha = document.getElementById("Flecha");

flecha.addEventListener("click", function() {

    program.classList.add("oculto");
    lengu.classList.remove("oculto");

});
